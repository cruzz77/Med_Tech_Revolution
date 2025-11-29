import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Newton Medical Hospital is a modern healthcare ERP platform designed to streamline
            and automate core hospital operations. Built as a high-fidelity demonstration by 
            Soham and Aditya, the system addresses major challenges such as administrative 
            inefficiency, fragmented data, and outdated manual processes.
          </p>

          <p>
            The platform integrates essential modules like Patient Management, Electronic Health 
            Records (EHR), Billing & Insurance automation, and advanced Inventory tracking—powered 
            by a scalable backend and a responsive React.js interface. Designed for private 
            hospitals and large government healthcare networks, Newton ensures efficiency, 
            transparency, and secure data handling at every step.
          </p>

          <b className='text-gray-800'>Our Vision</b>
          
          <p>
            Our vision at Newton Hospital is to create a seamless, unified healthcare experience 
            by bridging the gap between patients and providers. We aim to support hospitals in 
            delivering faster, smarter, and more reliable care through modern technology and 
            intelligent automation.
          </p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 
        text-[15px] hover:bg-primary hover:text-white transition-all duration-300 
        text-gray-600 cursor-pointer'>
          <b>ADVANCED AUTOMATION</b>
          <p>Smart workflows, reduced wait times, and real-time operational efficiency.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 
        text-[15px] hover:bg-primary hover:text-white transition-all duration-300 
        text-gray-600 cursor-pointer'>
          <b>UNIFIED PLATFORM</b>
          <p>Seamless integration of patient data, billing, records, and inventory in one place.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 
        text-[15px] hover:bg-primary hover:text-white transition-all duration-300 
        text-gray-600 cursor-pointer'>
          <b>SCALABILITY & SECURITY</b>
          <p>
            Built to support multi-facility hospital networks with strict data-security 
            and compliance standards.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About
