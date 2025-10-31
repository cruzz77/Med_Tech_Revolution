 🏥 Hospital Management System (HMS)

A full-stack **Hospital Management System** built using **Node.js**, **React**, **MySQL**, and **Prisma ORM**.  
This project aims to simplify hospital operations such as managing patients, doctors, appointments, and medical records — all in one efficient system.
🚀 Tech Stack

🧠 Backend
- Node.js** with **Express.js**
- Prisma ORM** for database modeling and queries
- MySQL as the relational database
- JWT Authentication**
- Bcrypt for password hashing

 💻 Frontend
- React.js (Vite)** for the user interface
- Axios** for API communication
- React Router DOM** for navigation

---
 📁 Folder Structure

Hospital-Management-System/
│
├── backend/
│ ├── src/
│ │ ├── controllers/ # Route controllers (logic)
│ │ ├── middlewares/ # Auth and error handling
│ │ ├── routes/ # API routes
│ │ ├── prisma/ # Prisma schema and seed files
│ │ ├── utils/ # JWT, async handler, etc.
│ │ ├── config/ # DB and environment setup
│ │ ├── app.js # Express app setup
│ │ └── server.js # Entry point
│ ├── package.json
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Pages (Dashboard, Login, etc.)
│ │ ├── context/ # Global context management
│ │ ├── services/ # API integration via Axios
│ │ ├── App.js
│ │ └── main.jsx
│ ├── package.json
│ └── vite.config.js
│
└── README.md
