import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../db/client.js";


// SIGNUP
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // CHECK EXISTING USER
    const existingUser = await prisma.User.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE USER
    const newUser = await prisma.User.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
        role: "PATIENT"  // default role
      }
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
};



// LOGIN
const login = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!password || (!email && !name)) {
      return res.status(400).json({ error: "Email or name AND password required" });
    }

    let user;

    // LOGIN USING EMAIL
    if (email) {
      user = await prisma.User.findUnique({
        where: { email: email.toLowerCase() }
      });
    }

    // LOGIN USING NAME
    if (!user && name) {
      user = await prisma.User.findFirst({
        where: { name }
      });
    }

    if (!user) {
      return res.status(401).json({ message: "Invalid email or name" });
    }

    // CHECK PASSWORD
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // JWT TOKEN
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      userData: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Invalid Json" });
  }
};


export { signup, login };



// import bcrypt from "bcrypt"
// import jwt from "jsonwebtoken"
// import prisma from "../db/client.js";



// // Signup Route

// const signup  = async (req,res)=>{

//     try{
//         const {name,email,password}=req.body;

//         if (!name || !email || !password) {
//             return res.status(400).send({ "error": "All fields are required" });
//         }

//         const existing = await prisma.user.findUnique({
//             where:{email:email}
//         })

//         if (existing){
//             return res.status(400).json({message:"User alreadyy exists."})
//         }

//         const hashedPassword = await bcrypt.hash(password,10)


//         const addUser = await prisma.user.create({
//             data:{
//                 name,
//                 email,
//                 password:hashedPassword,
//             }
//         });

//         return res.status(201).json({message:"Employee added successflly.",
//             addUser,
//         })
    
//     }

//     catch(error){
//         console.log(error)
//         return res.status(500).json({message:"server error"})
//     }
// }



// // Login Route
// const login = async(req,res)=>{

//    try{
//     const {name, email, password} = req.body

//     if (!password || (!email && !name)) {
//         return res.status(400).send({ "error": "All fields are required" });
//     }

//     const checkUser = await prisma.user.findUnique({
//         where:{email}
//     })

//     if(!checkUser){
//         return res.status(400).json({message:"Invliad email or password"})
//     }
    
//     const Match = await bcrypt.compare(password,user.password)

//     if(!Match){
//         return res.status(400).json({message:"Invliad email or password"})
//     }


//     const token =  jwt.sign(
//         {id: user.id, email: user.email}, 
//         process.env.JWT_SECRET,
//         {expiresIn: "1d"}
//     )

//     return res.json({
//         message:"Login Successfully",
//         token
//     })
//     }
//    catch(error){
//     console.log(error)
//     return res.status(401).json({message:"Invalid Json"})
//    }
   
// }
// export { signup, login };








// const express = require('express');
// const { PrismaClient } = require('@prisma/client');
// const dotenv = require('dotenv');
// const generateToken = require('../utils/generateToken');
// const bcrypt = require('bcrypt');

// dotenv.config();

// const app = express();

// const prisma = new PrismaClient();

// app.use(express.json());


// app.post('/signup', async (req, res) => {
//     const { name, email, password } = req.body;
    // if (!name || !email || !password) {
    //     return res.status(400).send({ "error": "All fields are required" });
    // }
//     const existingUser = await prisma.user.findFirst({
//         where: {
//             OR: [
//                 { email: email.toLowerCase() },
//                 { name: name }
//             ]
//         }
//     });
//     if (existingUser) {
//         return res.status(400).send({ "error": "Username or email already exists" });
//     }

//     const hashedPass = await bcrypt.hash(password, 10);

//     const newUser = await prisma.user.create({
//         data: {
//             email: email.toLowerCase(),
//             name: name,
//             password: hashedPass
//         }
//     });

//     const token = generateToken(newUser);

//     res.status(201).json({
//       message: "User created successfully!",
//       token,
//       user: {
//         id: newUser.id,
//         name: newUser.name,
//         email: newUser.email,
//         role: newUser.role
//       }
//     });
// });



// app.post('/login', async (req, res) => {

    // const { name, email, password } = req.body;
    // if (!password || (!email && !name)) {
    //     return res.status(400).send({ "error": "All fields are required" });
    // }

//     let existingUser;
//     if (email) {
//         let existemail = email.toLowerCase();
//         existingUser = await prisma.user.findFirst({
//             where: { email: existemail }
//         });
//     }
//     else if (name) {
//         existingUser = await prisma.user.findFirst({
//             where: { name: name }
//         });
//     }
//     if (!existingUser) {
//         return res.status(401).send({
//             "message": "Invalid credentials"
//         });
//     }

//     const passwordMatch = await bcrypt.compare(password, existingUser.password);
//     if (!passwordMatch) {
//         return res.status(401).send({
//             "message": "Invalid credentials"
//         });
//     }

//     const og_token = generateToken(existingUser);

//     res.status(200).json({
//       message: "user Logged in successfully",
//       token: og_token,
//       userData: {
//         id: existingUser.id,
//         name: existingUser.name,
//         email: existingUser.email,
//         role: existingUser.role
//       }
//     });
// });

// const getProfile = async (req, res) => {

// }

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// module.exports = { app, prisma };





