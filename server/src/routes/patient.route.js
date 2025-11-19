import express from "express";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

import {
  getMyProfile,
  updateMyProfile,
  getMyAppointments,
  getMyMedicalRecords
} from "../controller/patientController.js";

const router = express.Router();

/* ---------------------------------------------------------
   PROTECT ALL PATIENT ROUTES
--------------------------------------------------------- */
router.use(authMiddleware);
router.use(roleMiddleware("PATIENT"));

/* ---------------------------------------------------------
   PATIENT ROUTES
--------------------------------------------------------- */

// GET my profile
router.get("/profile", getMyProfile);

// UPDATE my profile
router.put("/profile", updateMyProfile);

// GET my appointments
router.get("/appointments", getMyAppointments);

// GET my medical records
router.get("/records", getMyMedicalRecords);

export default router;
