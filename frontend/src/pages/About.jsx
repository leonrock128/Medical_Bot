import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-[#707070]'>
                <p> ABOUT <span className='text-gray-700 font-semibold'>US</span>
                </p>
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-[15px] text-gray-600 tracking-[0.4px] [word-spacing:0px]'>
                    <p>
                        Artificial intelligence (AI) and machine learning (ML) are transforming healthcare, offering new opportunities for accurate, efficient, and personalized disease diagnosis and medicine delivery. The AI/ML-Based System enhances medical decision-making by improving diagnostic precision, treatment management, and overall healthcare quality.
                    </p>
                    <p>
                        By analyzing patient data such as medical history, genetics, and current health status, the system provides tailored treatment recommendations that address individual needs. Its ability to continuously learn from new data and medical advancements ensures up-to-date, effective, and personalized care for better patient outcomes.
                    </p>
                    <b className='text-gray-800'>Our Vision</b>
                    <p>
                       To revolutionize healthcare through AI and ML by delivering accurate diagnoses, personalized treatments, and efficient medicine delivery. We envision a system that continuously learns, adapts, and evolves to provide safer, smarter, and more effective healthcare solutions for every patient.
                    </p>
                </div>
            </div>

            <div className='text-xl my-4'>
                <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
            </div>

            <div className='flex flex-col md:flex-row mb-20'>
                <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#379fb2ae] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer tracking-[0.4px] [word-spacing:0px]'>
                    <b>EFFICIENCY</b>
                    <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.
                    </p>
                </div>
                <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#379fb2ae] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer tracking-[0.4px] [word-spacing:0px]'>
                    <b>CONVENIENCE</b>
                    <p>
                        Access To A Network Of Trusted Healthcare Professionals In Your Area.
                    </p>
                </div>
                <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#379fb2ae] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer tracking-[0.4px] [word-spacing:0px]'>
                    <b>PERSONALIZATION</b>
                    <p>Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.</p>
                </div>
            </div>
            
        </div>
    )
}
export default About