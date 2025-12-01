# 🏥 **Hospital Management System (HMS)**  
*A role-based full-stack hospital management platform built with MERN and Vite.*

---

🖥️ Dashboard Overview

The Hospital Management System (HMS) includes three powerful dashboards — each tailored for the role accessing it.
Every dashboard is built to be clean, fast, and task-oriented, giving each user exactly what they need without complexity.

👤 Patient Dashboard

A user-friendly interface where patients can:

🔍 Search and discover doctors

📅 Book upcoming appointment slots

📜 View appointment history

📝 Edit profile & medical information

💬 (Upcoming) Chat with doctors in real-time

🧑‍⚕️ Doctor Dashboard

Doctors get a clean and organized view of their daily workflow:

📅 Manage all patient appointments

⏳ See pending, ongoing, and completed visits

🗂 Access patient records in one click

📝 Update profile, qualifications, and availability

🔄 View real-time appointment updates

🏢 Admin Dashboard

The Admin Dashboard is the control center of the entire HMS system.

Admins can:

🧑‍⚕️ Manage doctors (add, update, remove)

👤 Manage patients

📅 Track appointment traffic and analytics

🗄️ Maintain hospital-wide configuration

🔒 Oversee security and role permissions




## 👥 Authors
- **Aditya Chopra** – @cruzz77  
- **Soham Goel** – @goelsoham  
- **Ankit Kumar** – @Ankit-bit-cyber  
- **Nilesh Nand Lal** – @NEELxjustice  


---

## ⚡ **Key Features**

| Feature | Description |
|--------|-------------|
| 🔐 Role-based authentication | Login system using JWT tokens |
| 🧑‍⚕️ Doctor profiles | Stored & served from Cloudinary |
| 📅 Appointment booking | Patients can book doctor slots |
| 🏢 Admin dashboard | Manage doctors, user appointments, records |
| 📡 RESTful API | Built with Node.js + Express |
| 🗃 Cloud database | MongoDB Atlas + Mongoose ODM |

---

## 📁 **Project Structure**

```
HMS/
├── frontend/   → Patient App (Vite + React)
├── admin/      → Admin/Doctor Dashboard (Vite + React)
├── backend/    → API server + DB + Cloudinary + Auth
└── .gitignore
```

---

## 🛠 **Tech Stack**

### **Frontend**
- Vite
- React
- TailwindCSS
- Axios (API requests)

### **Backend**
- Node.js
- Express.js
- Mongoose (ODM)
- Bcrypt (password hashing)
- JSON Web Tokens (JWT)

### **Database & Storage**
- **MongoDB Atlas**
- **Cloudinary** 

### **Dev Tools**
- VS Code
- Postman 
- Git & GitHub


## 📈 Project Development Flow  
A behind-the-scenes look at how the Hospital Management System (HMS) was planned, designed, and built.

### 🟦 1. Problem Identification  
We began by identifying common issues in traditional hospital systems:
- Manual appointment handling  
- Fragmented doctor–patient communication  
- No role-based access separation  
- Lack of centralized dashboards for admins  
- Difficulty managing patient records securely  

This helped us define the initial scope and vision.

---

### 🟩 2. Requirement Gathering  
We listed requirements for all 3 user roles:

**Patients:**  
- View doctors  
- Book appointments  
- Manage profiles  

**Doctors:**  
- Approve / reject appointments  
- Manage availability  
- Access patient info securely  

**Admin:**  
- Add/remove doctors  
- Monitor all appointments  
- Maintain records & logs  

We converted these into actionable features.

---

### 🟨 3. System Architecture Planning  
We decided to build:
- **1 Backend API** → common for all users  
- **2 Frontends (Vite + React):**  
  - Patient App  
  - Admin/Doctor Dashboard  
- **Cloud integrations:** MongoDB Atlas + Cloudinary  

We also defined our tech stack: MERN + Tailwind + JWT Authentication.

---

### 🟧 4. UI/UX & Component Planning  
We created simple wireframes for:
- Login pages  
- Patient dashboard  
- Doctor dashboard  
- Admin management pages  

Each UI was designed to match its role:  
Minimal for users, data-heavy for doctors/admins.

---

### 🟥 5. Backend Development  
We built the backend first:
- Authentication (JWT + bcrypt)  
- Doctor model + profile management  
- Appointment APIs  
- Role-based routes  
- Cloudinary upload service  
- Error handling + middleware  

Once the API was stable, we moved to the frontend.

---

### 🟦 6. Frontend Development  
We built both frontends in parallel:

#### **Patient App (frontend/)**  
- Doctor listing  
- Slot booking  
- Profile management  

#### **Admin/Doctor Dashboard (admin/)**  
- Admin: Manage doctors + appointments  
- Doctor: View appointments, update status  

We used:
- React hooks  
- Axios  
- TailwindCSS  
- Protected routes  

---

### 🟪 7. Testing & Improvements  
We tested all flows end-to-end:  
- Patient → Doctor → Admin  
- Token expiry  
- Image upload validation  
- Slow network / error handling  
- Appointment approval logic  

Multiple improvements were made from testing feedback.

---

### 🟫 8. 
We are preparing for deployment using:
- **Frontend:** Vercel / Netlify  
- **Backend:** Render / Railway  
- **Database:** MongoDB Atlas  
- **Domain:** Optional custom domain for production

### 🟩 9. Future Enhancements  
Planned upgrades:
- Real-time appointment updates (Socket.io)  
- Doctor availability calendar  
- Payment gateway  
- Email/SMS notifications  
- Analytics dashboard for admin  

---

### 🟧 10. Final Outcome  
A fully functional, role-based Hospital Management System with:
- Clean UI  
- Scalable backend  
- Secure authentication  
- Cloud storage  
- Modular architecture  


## ⚙️ **Environment Variables Setup**

Each app contains a **separate `.env` file**.

### 🔹 **Backend (`backend/.env`)**

```env
CURRENCY="INR"
JWT_SECRET="YOUR_JWT_SECRET"

MONGODB_URI="YOUR_MONGODB_ATLAS_URI"

ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="YOUR_ADMIN_PASSWORD"

# Cloudinary Setup
CLOUDINARY_NAME="YOUR_CLOUDINARY_NAME"
CLOUDINARY_API_KEY="YOUR_CLOUDINARY_API_KEY"
CLOUDINARY_SECRET_KEY="YOUR_CLOUDINARY_SECRET"
```

---

## 📦 **Installation & Setup**

### 1️⃣ **Clone the repository**

```bash
git clone https://github.com/cruzz77/Med_Tech_Revolution
cd Med_Tech_Revolution

```

---

### 2️⃣ **Setup Backend**

```bash
cd backend
npm install
```

Run backend server:

```bash
npm run dev
```

---

### 3️⃣ **Setup Patient (User) Frontend**

```bash
cd ../frontend
npm install
npm run dev
```

---

### 4️⃣ **Setup Admin/Doctor Dashboard Frontend**

```bash
cd ../admin
npm install
npm run dev
```

---

## 🔐 **Security Notes**

✔ Add `.env` files to `.gitignore` and never expose them  
✔ Rotate secrets if leaked  
✔ Use strong passwords for admin  
✔ Enable 2-factor auth on MongoDB & Cloudinary accounts  

Example `.gitignore` entry:

```
# Environment Variables
backend/.env
frontend/.env
admin/.env
```

---

## 👨‍⚕️ **Roles Routing Logic**

| Role | Frontend App | Route Path |
|------|-------------|------------|
| 👤 User | `frontend/` | `/` |
| 🧑‍⚕️ Doctor | `admin/` | `/doctor-dashboard` |
| 🏢 Admin | `admin/` | `/admin-dashboard` |

---

## 🤝 **Contributing**

Pull requests are welcome! Open an issue before submitting major changes.

---

## 📧 **Contact**

**Developer**: Aditya Chopra, Soham Goel, Ankit Kumar, Nilesh Nand Lal
**GitHub**: @cruzz77, @goelsoham, @Ankit-bit-cyber, @NEELxjustice
**Project**: HMS Full-Stack System using MERN + Vite + RBAC  

---

## ⭐ **Acknowledgements**

- MongoDB Atlas
- Cloudinary
- Vite + React
- Open-source Node.js ecosystem

🏁 Conclusion

The Hospital Management System (HMS) is designed to simplify and modernize healthcare operations by providing a clean, scalable, and secure platform for Patients, Doctors, and Admins. With a fully modular MERN architecture, cloud-powered media handling, and dedicated dashboards for each role, HMS stands as a practical, production-ready solution for real-world hospital workflows.

Our goal is to continue improving the system with better UI, rich analytics, advanced appointment management, and AI-powered decision support in the future.
If you are interested in collaborating, contributing, or deploying HMS in your institution — we’re always open to discuss and innovate together.
---

### 🎉 *If you like this project, don't forget to ⭐ star the repo!*
````md

📩 Contact

For any project-related queries, improvements, or collaboration opportunities, feel free to reach out:

👤 Soham Goel
📞 +91 8010803803
📧 soham.goel@adypu.edu.in

🔗 GitHub: @goelsoham

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" />
  <img src="https://img.shields.io/badge/License-MIT-blue" />
  <img src="https://img.shields.io/badge/MERN-Stack-success" />
  <img src="https://img.shields.io/badge/Vite-Frontend-orange" />
</p>

