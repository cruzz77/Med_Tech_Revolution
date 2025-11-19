import prisma from "../db/client.js";

/* ---------------------------------------------------------
   GET DOCTOR PROFILE (Doctor Only)
--------------------------------------------------------- */
export const getDoctorProfile = async (req, res) => {
  try {
    const doctorId = req.user.id; // comes from auth middleware

    const doctor = await prisma.Doctor.findFirst({
      where: { userId: doctorId },
      include: { user: true }
    });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor profile not found" });
    }

    return res.json(doctor);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------------------------------------------------
   UPDATE DOCTOR PROFILE
--------------------------------------------------------- */
export const updateDoctorProfile = async (req, res) => {
  try {
    const doctorId = req.user.id;
    const { specialization, experience, phone, name, email } = req.body;

    // Get doctor entry
    const doctor = await prisma.Doctor.findFirst({
      where: { userId: doctorId }
    });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor profile not found" });
    }

    const updatedDoctor = await prisma.Doctor.update({
      where: { id: doctor.id },
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

    return res.json({
      message: "Doctor profile updated successfully",
      updatedDoctor
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------------------------------------------------
   GET DOCTOR'S APPOINTMENTS
--------------------------------------------------------- */
export const getMyAppointments = async (req, res) => {
  try {
    const doctorId = req.user.id;

    const doctor = await prisma.Doctor.findFirst({
      where: { userId: doctorId }
    });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const appointments = await prisma.Appointment.findMany({
      where: { doctorId: doctor.id },
      include: {
        patient: { include: { user: true } }
      }
    });

    return res.json(appointments);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------------------------------------------------
   UPDATE APPOINTMENT STATUS
--------------------------------------------------------- */
export const updateAppointmentStatus = async (req, res) => {
  try {
    const doctorId = req.user.id;
    const appointmentId = Number(req.params.id);
    const { status } = req.body;

    const doctor = await prisma.Doctor.findFirst({
      where: { userId: doctorId }
    });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const appointment = await prisma.Appointment.findUnique({
      where: { id: appointmentId }
    });

    if (!appointment || appointment.doctorId !== doctor.id) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    const updated = await prisma.Appointment.update({
      where: { id: appointmentId },
      data: { status }
    });

    return res.json({
      message: "Appointment updated successfully",
      updated
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------------------------------------------------
   ADD MEDICAL RECORD FOR PATIENT
--------------------------------------------------------- */
export const addMedicalRecord = async (req, res) => {
  try {
    const doctor = await prisma.Doctor.findFirst({
      where: { userId: req.user.id }
    });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const { patientId, diagnosis, prescription } = req.body;

    const patient = await prisma.Patient.findUnique({
      where: { id: Number(patientId) }
    });

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const record = await prisma.MedicalRecord.create({
      data: {
        patientId: patient.id,
        diagnosis,
        prescription
      }
    });

    return res.status(201).json({
      message: "Medical record added successfully",
      record
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
