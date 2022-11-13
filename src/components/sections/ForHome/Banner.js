import React from 'react';
import bannerImg from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bg})`}} className='min-h-[500px] flex items-center px-6'>
            <div className="hero text-gray-800)">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} alt='doctors chair' className='lg:w-1/2'/>
                    <div className='lg:w-1/2'>
                        <h1 className="text-4xl md:text-5xl font-bold capitalize text-[#8e85cf] mb-2">Your New Smile starts </h1>
                        <h1 className="text-4xl md:text-5xl font-bold capitalize text-[#8e85cf]">with Fresh Breath</h1>
                        <p className="py-6 text-[#948ec3] text-justify">Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth. It consists of the study, diagnosis, prevention, management, and treatment of diseases, disorders, and conditions of the mouth, most commonly focused on dentition as well as the oral mucosa.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] hover:bg-gradient-to-l duration-300">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner