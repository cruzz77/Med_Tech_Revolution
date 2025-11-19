// CREATE ROUTE FOR RECEPTIONIST ABLE TO REGISTER A PATIENT 
// CREATE ROUTE FOR A PATIENT TO BE ABLE TO REQUEST TO BOOK AN APPOINTMENT



import express from "express";

import authMiddleware from "./middlewares/authMiddleware.js";
import roleMiddleware from "./middlewares/roleMiddleware.js";

import receptionistRoute from "./routes/receptionist.route.js";
import authRoute from "./routes/auth.route.js";
import adminRoute from "./routes/admin.route.js";
import doctorRoute from "./routes/doctor.route.js";
import patientRoute from "./routes/patient.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/* ---------------------------
   PUBLIC AUTH ROUTES
---------------------------- */
app.use("/auth", authRoute);

/* ---------------------------
   PROTECTED ROLE ROUTES
---------------------------- */
app.use(
  "/admin",
  authMiddleware,
  roleMiddleware("ADMIN"),
  adminRoute
);

app.use(
  "/doctor",
  authMiddleware,
  roleMiddleware("DOCTOR"),
  doctorRoute
);

app.use(
  "/patient",
  authMiddleware,
  roleMiddleware("PATIENT"),
  patientRoute
);

app.use(
  "/receptionist",
  authMiddleware,
  roleMiddleware("RECEPTIONIST"),
  receptionistRoute
);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
