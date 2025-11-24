import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>

🏥 Newton Medical Hospital Project Overview
The Newton Medical Hospital project represents a comprehensive, full-stack enterprise resource planning (ERP) platform designed to modernize and automate core operational processes within both private hospitals and expansive governmental healthcare systems. Conceived and developed as a high-fidelity demonstration by Soham and Aditya, the platform is strategically engineered for future commercialization, providing a robust solution to the pervasive challenges of administrative inefficiency and fragmented data management common in large-scale healthcare organizations. The system's primary value lies in its modular architecture, encompassing critical functions such as Patient Management, a centralized Electronic Health Records (EHR) module, automated Billing and Insurance processing, and sophisticated Inventory and Supply Chain tracking. It utilizes a modern technical stack, leveraging React.js for an intuitive, responsive user interface and a scalable backend for handling high data throughput characteristic of multi-facility networks. A central focus is placed on workflow automation, employing smart scheduling algorithms to minimize patient wait times and dedicated analytical dashboards that offer real-time insights into resource utilization and hospital capacity. Furthermore, the platform adheres to rigorous standards for data security and regulatory compliance, ensuring patient confidentiality and data integrity are maintained at the highest level. By replacing outdated, manual procedures, the Newton project offers government systems a transparent, unified digital infrastructure essential for managing public health initiatives and efficiently allocating scarce resources. The current demo serves as a tangible blueprint, confirming the system's viability and accelerating its pathway into the procurement cycles of public sector healthcare, ultimately acting as a powerful digital catalyst for a more automated, efficient, and patient-centric healthcare future.</p>
          <p>NEWTON HOSPITAL is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Newton hospital is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
