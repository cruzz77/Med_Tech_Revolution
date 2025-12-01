import React from 'react'
import { useNavigate } from 'react-router-dom'
import nileshImage from '../assets/nilesh.png'
import bgVideo from '../assets/bg_video.mp4'   // your video

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className="relative rounded-xl overflow-hidden shadow-xl my-28 md:mx-10">

            {/* ------- Background Video ------- */}
            <video
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Optional overlay (remove if not needed) */}
            <div className="absolute inset-0 bg-violet-700/40"></div>

            {/* ------- Foreground Content ------- */}
            <div className='relative z-10 flex px-6 sm:px-10 md:px-12 lg:px-16'>

                {/* Left Side */}
                <div className='flex-1 py-12 sm:py-16 md:py-20 lg:py-24 lg:pr-10'>
                    
                    <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight'>
                        <p>Book Appointment</p>
                        <p className='mt-2'>With 100+ Trusted Doctors</p>
                    </div>

                    <h3 className='text-gray-200 mt-4 md:mt-6 text-base sm:text-lg max-w-sm'>
                        Find the perfect specialist for your needs and schedule your visit hassle-free.
                    </h3>

                    <button 
                        onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
                        className='bg-white text-base sm:text-lg text-violet-600 font-semibold px-10 py-3 rounded-full mt-8 hover:bg-gray-100 transform hover:scale-[1.02] transition-all duration-300'
                    >
                        Create account
                    </button>
                </div>

                {/* Right Side Image */}
                <div className='hidden md:flex md:w-1/2 lg:w-[450px] relative items-end'>
                    <img 
                        className='w-full h-full object-cover absolute bottom-0 right-0 max-w-none' 
                        src={nileshImage} 
                        alt="Trusted Doctor" 
                    />
                </div>

            </div>
        </div>
    )
}

export default Banner

