import express from "express";
import {
  getDoctorProfile,
  updateDoctorProfile,
  getMyAppointments,
  updateAppointmentStatus,
  addMedicalRecord
} from "../controller/doctorController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

/* -----------------------------------------------
   ONLY DOCTOR ROLE CAN ACCESS THESE ROUTES
----------------------------------------------- */
router.use(authMiddleware);  
router.use(roleMiddleware("DOCTOR"));

/* ---------------------------------------------------------
   PROFILE
--------------------------------------------------------- */
router.get("/profile", getDoctorProfile);
router.put("/profile", updateDoctorProfile);

/* ---------------------------------------------------------
   APPOINTMENTS
--------------------------------------------------------- */
router.get("/appointments", getMyAppointments);
router.put("/appointment/:id/status", updateAppointmentStatus);

/* ---------------------------------------------------------
   MEDICAL RECORDS
--------------------------------------------------------- */
router.post("/record", addMedicalRecord);

export default router;
