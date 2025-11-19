import prisma from "../db/client.js";

/* ---------------------------------------------------------
   GET PATIENT PROFILE (only logged-in patient)
--------------------------------------------------------- */
const getMyProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const patient = await prisma.Patient.findUnique({
      where: { userId },
      include: {
        user: {
          select: { id: true, name: true, email: true, role: true }
        }
      }
    });

    if (!patient) {
      return res.status(404).json({ message: "Patient profile not found" });
    }

    return res.json(patient);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};


/* ---------------------------------------------------------
   UPDATE PATIENT PROFILE
--------------------------------------------------------- */
const updateMyProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email, age, gender, address, phone } = req.body;

    const updated = await prisma.Patient.update({
      where: { userId },
      data: {
        age: age ? Number(age) : undefined,
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

    return res.json({
      message: "Profile updated successfully",
      updated
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};


/* ---------------------------------------------------------
   GET MY APPOINTMENTS
--------------------------------------------------------- */
const getMyAppointments = async (req, res) => {
  try {
    const userId = req.user.id;

    const patient = await prisma.Patient.findUnique({
      where: { userId }
    });

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const appointments = await prisma.Appointment.findMany({
      where: { patientId: patient.id },
      include: {
        doctor: {
          include: {
            user: {
              select: { name: true, email: true }
            }
          }
        }
      }
    });

    return res.json(appointments);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};


/* ---------------------------------------------------------
   GET MY MEDICAL RECORDS
--------------------------------------------------------- */
const getMyMedicalRecords = async (req, res) => {
  try {
    const userId = req.user.id;

    const patient = await prisma.Patient.findUnique({
      where: { userId }
    });

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const records = await prisma.MedicalRecord.findMany({
      where: { patientId: patient.id }
    });

    return res.json(records);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};


export {
  getMyProfile,
  updateMyProfile,
  getMyAppointments,
  getMyMedicalRecords
};

