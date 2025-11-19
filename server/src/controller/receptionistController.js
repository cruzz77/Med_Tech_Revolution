import prisma from "../db/client.js";

/* ---------------------------------------------------------
   GET RECEPTIONIST PROFILE
--------------------------------------------------------- */
export const getMyProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const receptionist = await prisma.Receptionist.findUnique({
      where: { userId },
      include: {
        user: { select: { id: true, name: true, email: true, role: true } }
      }
    });

    if (!receptionist) {
      return res.status(404).json({ message: "Receptionist profile not found" });
    }

    return res.json(receptionist);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};


/* ---------------------------------------------------------
   GET ALL DOCTORS
--------------------------------------------------------- */
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await prisma.Doctor.findMany({
      include: {
        user: { select: { name: true, email: true } }
      }
    });

    return res.json(doctors);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};


/* ---------------------------------------------------------
   GET ALL PATIENTS
--------------------------------------------------------- */
export const getAllPatients = async (req, res) => {
  try {
    const patients = await prisma.Patient.findMany({
      include: {
        user: { select: { name: true, email: true } }
      }
    });

    return res.json(patients);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};


/* ---------------------------------------------------------
   CREATE APPOINTMENT
--------------------------------------------------------- */
export const createAppointment = async (req, res) => {
  try {
    const { patientId, doctorId, date } = req.body;

    const appointment = await prisma.Appointment.create({
      data: {
        patientId: Number(patientId),
        doctorId: Number(doctorId),
        date: new Date(date),
        status: "Scheduled"
      }
    });

    return res.status(201).json({
      message: "Appointment created successfully",
      appointment
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};


/* ---------------------------------------------------------
   GET ALL APPOINTMENTS
--------------------------------------------------------- */
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await prisma.Appointment.findMany({
      include: {
        patient: { include: { user: true } },
        doctor: { include: { user: true } }
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
    const id = Number(req.params.id);
    const { status } = req.body;

    const updated = await prisma.Appointment.update({
      where: { id },
      data: { status }
    });

    return res.json({
      message: "Appointment status updated",
      updated
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
