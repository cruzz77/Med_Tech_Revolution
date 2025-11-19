import express from "express";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

import {
  getMyProfile,
  getAllDoctors,
  getAllPatients,
  createAppointment,
  getAllAppointments,
  updateAppointmentStatus
} from "../controller/receptionistController.js";

const router = express.Router();

/* ---------------------------------------------------------
   PROTECT ALL RECEPTIONIST ROUTES
--------------------------------------------------------- */
router.use(authMiddleware);
router.use(roleMiddleware("RECEPTIONIST"));

/* ---------------------------------------------------------
   ROUTES
--------------------------------------------------------- */

// Get receptionist profile
router.get("/profile", getMyProfile);

// Get all doctors
router.get("/doctors", getAllDoctors);

// Get all patients
router.get("/patients", getAllPatients);

// Create appointment
router.post("/appointment", createAppointment);

// Get all appointments
router.get("/appointments", getAllAppointments);

// Update appointment status
router.put("/appointment/:id/status", updateAppointmentStatus);

export default router;
