import bcrypt from "bcrypt";
import prisma from "../db/client.js";

/* ---------------------------------------------------------
   UTILITY FUNCTION: Create user with a specific role
--------------------------------------------------------- */
const createUserWithRole = async (req, res, role) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existing = await prisma.User.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (existing) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.User.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
        role: role,
      }
    });

    return user; // Return user for further role creation
  } catch (error) {
    throw error;
  }
};

/* ---------------------------------------------------------
   CREATE DOCTOR (Creates User + Doctor profile)
--------------------------------------------------------- */
const createDoctor = async (req, res) => {
  try {
    const user = await createUserWithRole(req, res, "DOCTOR");

    const { specialization, experience, phone } = req.body;

    const doctor = await prisma.Doctor.create({
      data: {
        userId: user.id,
        specialization,
        experience: Number(experience),
        phone
      }
    });

    return res.status(201).json({
      message: "Doctor created successfully",
      user,
      doctor
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------------------------------------------------
   CREATE RECEPTIONIST
--------------------------------------------------------- */
const createReceptionist = async (req, res) => {
  try {
    const user = await createUserWithRole(req, res, "RECEPTIONIST");
    const { phone } = req.body;

    const receptionist = await prisma.Receptionist.create({
      data: {
        userId: user.id,
        phone
      }
    });

    return res.status(201).json({
      message: "Receptionist created successfully",
      user,
      receptionist
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------------------------------------------------
   CREATE ADMIN
--------------------------------------------------------- */
const createAdmin = async (req, res) => {
  try {
    const user = await createUserWithRole(req, res, "ADMIN");

    return res.status(201).json({
      message: "Admin created successfully",
      user
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------------------------------------------------
   GET ALL USERS
--------------------------------------------------------- */
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.User.findMany();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------------------------------------------------
   GET USER BY ID
--------------------------------------------------------- */
const getUserById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const user = await prisma.User.findUnique({
      where: { id }
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(user);

  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------------------------------------------------
   UPDATE USER (name, email, role)
--------------------------------------------------------- */
const updateUser = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, email, role } = req.body;

    const updated = await prisma.User.update({
      where: { id },
      data: {
        name,
        email: email?.toLowerCase(),
        role
      }
    });

    return res.json({
      message: "User updated successfully",
      updated
    });

  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------------------------------------------------
   DELETE USER (and linked role table)
--------------------------------------------------------- */
const deleteUser = async (req, res) => {
  try {
    const id = Number(req.params.id);

    // Delete auto cascades from related tables
    await prisma.User.delete({
      where: { id }
    });

    return res.json({ message: "User deleted successfully" });

  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------------------------------------------------
   DOCTOR MANAGEMENT: Get, Update, Delete doctor
--------------------------------------------------------- */
const getDoctorById = async (req, res) => {
  try {
    const doctorId = Number(req.params.id);

    const doctor = await prisma.Doctor.findUnique({
      where: { id: doctorId },
      include: { user: true }
    });

    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    return res.json(doctor);

  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const doctorId = Number(req.params.id);
    const { specialization, experience, phone, name, email } = req.body;

    const doctor = await prisma.Doctor.update({
      where: { id: doctorId },
      data: {
        specialization,
        experience: Number(experience),
        phone,
        user: {
          update: {
            name,
            email: email?.toLowerCase()
          }
        }
      },
      include: { user: true }
    });

    return res.json({ message: "Doctor updated", doctor });

  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const doctorId = Number(req.params.id);

    const doctor = await prisma.Doctor.findUnique({ where: { id: doctorId } });

    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    await prisma.User.delete({
      where: { id: doctor.userId }
    });

    return res.json({ message: "Doctor deleted successfully" });

  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------------------------------------------------
   RECEPTIONIST MANAGEMENT
--------------------------------------------------------- */
const getReceptionistById = async (req, res) => {
  try {
    const recId = Number(req.params.id);

    const rec = await prisma.Receptionist.findUnique({
      where: { id: recId },
      include: { user: true }
    });

    if (!rec) return res.status(404).json({ message: "Receptionist not found" });

    return res.json(rec);

  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const updateReceptionist = async (req, res) => {
  try {
    const recId = Number(req.params.id);
    const { phone, name, email } = req.body;

    const updated = await prisma.Receptionist.update({
      where: { id: recId },
      data: {
        phone,
        user: {
          update: {
            name,
            email: email?.toLowerCase()
          }
        }
      },
      include: { user: true }
    });

    return res.json({ message: "Receptionist updated", updated });

  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const deleteReceptionist = async (req, res) => {
  try {
    const recId = Number(req.params.id);

    const rec = await prisma.Receptionist.findUnique({ where: { id: recId } });

    if (!rec) return res.status(404).json({ message: "Receptionist not found" });

    await prisma.User.delete({
      where: { id: rec.userId }
    });

    return res.json({ message: "Receptionist deleted successfully" });

  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------------------------------------------------
   ROLE FILTERING (Get All Doctors / Receptionists / Patients)
--------------------------------------------------------- */

// Get all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await prisma.User.findMany({
      where: { role: "DOCTOR" }
    });
    return res.json(doctors);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Get all receptionists
const getAllReceptionists = async (req, res) => {
  try {
    const rec = await prisma.User.findMany({
      where: { role: "RECEPTIONIST" }
    });
    return res.json(rec);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Get all patients
const getAllPatients = async (req, res) => {
  try {
    const patients = await prisma.User.findMany({
      where: { role: "PATIENT" }
    });
    return res.json(patients);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------------------------------------------------
   PATIENT MANAGEMENT
--------------------------------------------------------- */
const getPatientById = async (req, res) => {
  try {
    const patientId = Number(req.params.id);

    const patient = await prisma.Patient.findUnique({
      where: { id: patientId },
      include: { user: true }
    });

    if (!patient) return res.status(404).json({ message: "Patient not found" });

    return res.json(patient);

  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const updatePatient = async (req, res) => {
  try {
    const patientId = Number(req.params.id);
    const { age, gender, address, phone, name, email } = req.body;

    const updated = await prisma.Patient.update({
      where: { id: patientId },
      data: {
        age: Number(age),
        gender,
        address,
        phone,
        user: {
          update: {
            name,
            email: email?.toLowerCase()
          }
        }
      },
      include: { user: true }
    });

    return res.json({ message: "Patient updated", updated });

  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const deletePatient = async (req, res) => {
  try {
    const patientId = Number(req.params.id);

    const patient = await prisma.Patient.findUnique({ where: { id: patientId } });

    if (!patient) return res.status(404).json({ message: "Patient not found" });

    await prisma.User.delete({
      where: { id: patient.userId }
    });

    return res.json({ message: "Patient deleted successfully" });

  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};


export {
  createDoctor,
  createReceptionist,
  createAdmin,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getAllDoctors,
  getAllReceptionists,
  getAllPatients,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
  getReceptionistById,
  updateReceptionist,
  deleteReceptionist,
  getPatientById,
  updatePatient,
  deletePatient
};