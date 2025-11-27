import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";
import { v2 as cloudinary } from 'cloudinary';

// Cloudinary Config Initialize (optional if already done globally)
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// API to register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: "Missing Details" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password (8+ chars)" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        return res.json({ success: true, token, message: "User registered successfully" });

    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
};

// API to login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        return res.json({ success: true, token, message: "Login successful" });

    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
};

// API to get user profile
const getProfile = async (req, res) => {
    try {
        const userId = req.body.userId;
        const userData = await userModel.findById(userId).select("-password");

        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        return res.json({ success: true, userData });

    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
};

// API to update user profile
const updateProfile = async (req, res) => {
    try {
        const { userId, name, phone, address, dob, gender } = req.body;
        const imageFile = req.file;

        if (!name || !phone || !dob || !gender) {
            return res.json({ success: false, message: "Missing required fields" });
        }

        const parsedAddress = address ? JSON.parse(address) : {};

        await userModel.findByIdAndUpdate(userId, {
            name,
            phone,
            address: parsedAddress,
            dob,
            gender,
        });

        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
                resource_type: "image",
            });

            const imageURL = imageUpload.secure_url;
            await userModel.findByIdAndUpdate(userId, { image: imageURL });
        }

        return res.json({ success: true, message: "Profile updated successfully" });

    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
};

// API to book appointment (without payment)
const bookAppointment = async (req, res) => {
    try {
        const { userId, docId, slotDate, slotTime } = req.body;
        const doctor = await doctorModel.findById(docId);

        if (!doctor || !doctor.available) {
            return res.json({ success: false, message: "Doctor not available" });
        }

        const slots = doctor.slots_booked || {};

        if (slots[slotDate]?.includes(slotTime)) {
            return res.json({ success: false, message: "Slot not available" });
        }

        if (!slots[slotDate]) {
            slots[slotDate] = [];
        }
        slots[slotDate].push(slotTime);

        const user = await userModel.findById(userId).select("-password");

        const appointment = new appointmentModel({
            userId,
            docId,
            userData: user,
            docData: doctor,
            amount: doctor.fees, // still storing fees but NOT using payment
            slotDate,
            slotTime,
            date: Date.now(),
        });

        await appointment.save();
        await doctorModel.findByIdAndUpdate(docId, { slots_booked: slots });

        return res.json({ success: true, message: "Appointment booked" });

    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
};

// API to cancel appointment
const cancelAppointment = async (req, res) => {
    try {
        const { userId, appointmentId } = req.body;
        const appointment = await appointmentModel.findById(appointmentId);

        if (!appointment || appointment.userId.toString() !== userId) {
            return res.json({ success: false, message: "Unauthorized action" });
        }

        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true });

        const doctor = await doctorModel.findById(appointment.docId);
        const slots = doctor.slots_booked;

        if (slots[appointment.slotDate]) {
            slots[appointment.slotDate] = slots[appointment.slotDate].filter(
                (t) => t !== appointment.slotTime
            );
        }

        await doctorModel.findByIdAndUpdate(appointment.docId, { slots_booked: slots });

        return res.json({ success: true, message: "Appointment cancelled" });

    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
};

// API to list appointments for user
const listAppointment = async (req, res) => {
    try {
        const userId = req.body.userId;
        const appointments = await appointmentModel.find({ userId });

        return res.json({ success: true, appointments });

    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
};

export {
    registerUser,
    loginUser,
    getProfile,
    updateProfile,
    bookAppointment,
    cancelAppointment,
    listAppointment,
};
