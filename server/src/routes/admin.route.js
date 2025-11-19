import express from "express";

import {
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
} from "../controller/adminController.js";

const router = express.Router();

/* ---------------------------------------------------------
   CREATE USERS (ADMIN ONLY)
--------------------------------------------------------- */
router.post("/createDoctor", createDoctor);
router.post("/createReceptionist", createReceptionist);
router.post("/createAdmin", createAdmin);

/* ---------------------------------------------------------
   USER MANAGEMENT
--------------------------------------------------------- */
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

/* ---------------------------------------------------------
   DOCTOR MANAGEMENT
--------------------------------------------------------- */
router.get("/doctors", getAllDoctors);
router.get("/doctor/:id", getDoctorById);
router.put("/doctor/:id", updateDoctor);
router.delete("/doctor/:id", deleteDoctor);

/* ---------------------------------------------------------
   RECEPTIONIST MANAGEMENT
--------------------------------------------------------- */
router.get("/receptionists", getAllReceptionists);
router.get("/receptionist/:id", getReceptionistById);
router.put("/receptionist/:id", updateReceptionist);
router.delete("/receptionist/:id", deleteReceptionist);

/* ---------------------------------------------------------
   PATIENT MANAGEMENT
--------------------------------------------------------- */
router.get("/patients", getAllPatients);
router.get("/patient/:id", getPatientById);
router.put("/patient/:id", updatePatient);
router.delete("/patient/:id", deletePatient);

export default router;
