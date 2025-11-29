import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import nileshImage from '../assets/nilesh.png' // Your imported image

const Banner = () => {

    const navigate = useNavigate()

    return (
        // Added shadow-xl for depth, increased vertical margin (my-28)
        <div className='flex bg-primary rounded-xl overflow-hidden shadow-xl px-6 sm:px-10 md:px-12 lg:px-16 my-28 md:mx-10'>
         
            {/* ------- Left Side (Text & Button) ------- */}
            <div className='flex-1 py-12 sm:py-16 md:py-20 lg:py-24 lg:pr-10'>
                
                {/* Heading with improved font-weight and line-height for readability */}
                <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight'>
                    <p>Book Appointment</p>
                    <p className='mt-2'>With 100+ Trusted Doctors</p>
                </div>
                
                {/* Subtext/Slogan */}
                <p className='text-gray-200 mt-4 md:mt-6 text-base sm:text-lg max-w-sm'>
                    Find the perfect specialist for your needs and schedule your visit hassle-free.
                </p>

                {/* Button styling refined for better contrast and effect */}
                <button 
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
                    className='bg-white text-base sm:text-lg text-primary font-semibold px-10 py-3 rounded-full mt-8 hover:bg-gray-100 transform hover:scale-[1.02] transition-all duration-300'
                >
                    Create account
                </button>
            </div>

            {/* ------- Right Side (Image) ------- */}
            {/* Container adjusted: set a fixed aspect ratio or a clear height for better control */}
            <div className='hidden md:flex md:w-1/2 lg:w-[450px] relative items-end'>
                
                {/* Image sizing and positioning: 
                    - h-full: Ensures the image takes the full height of the container.
                    - object-cover: Ensures the image covers the area without distortion (can crop).
                    - max-w-none: Prevents max-width limitations, allowing it to scale with the container.
                */}
                <img 
                    className='w-full h-full object-cover absolute bottom-0 right-0 max-w-none' 
                    src={nileshImage} 
                    alt="Trusted Doctor" 
                />
            </div>
        </div>
    )
}

export default Banner