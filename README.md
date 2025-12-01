# 🏥 **Hospital Management System (HMS)**  
*A role-based full-stack hospital management platform built with MERN and Vite.*

---

## 📖 **About The Project**

The **Hospital Management System (HMS)** is a full-stack web application designed to connect **Patients (Users), Doctors, and Hospital Admins** using a **single backend API**, while keeping **isolated frontend Vite apps per role**, each with its own `.env` configuration.

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

---

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

---

### 🎉 *If you like this project, don't forget to ⭐ star the repo!*
````md
````md
