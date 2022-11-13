import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png';
import treatmentImg from '../../../assets/images/treatment.png';


const Service = () => {
    return (
        <div className='py-10 px-6'>
            <h3 className='text-2xl text-center font-semibold text-[#19D3AE] capitalize'>Our services</h3>
            <h1 className='text-4xl text-center font-bold text-[#141852] capitalize mt-2'>Services We Provide</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-6'>
                <div className='text-center p-4 shadow shadow-teal-200 rounded-lg space-y-3'>
                    <div className='flex justify-center'>
                        <img src={fluride} alt="" />
                    </div>
                    <h3 className='text-2xl capitalize font-bold text-[#141852]'>Fluride Treatment</h3>
                    <p>Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels.</p>
                </div>

                <div className='text-center p-4 shadow shadow-teal-200 rounded-lg space-y-3'>
                    <div className='flex justify-center'>
                        <img src={cavity} alt="" />
                    </div>
                    <h3 className='text-2xl capitalize font-bold text-[#141852]'>cavity filling</h3>
                    <p>Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels.</p>
                </div>

                <div className='text-center p-4 shadow shadow-teal-200 rounded-lg space-y-3'>
                    <div className='flex justify-center'>
                        <img src={whitening} alt="" />
                    </div>
                    <h3 className='text-2xl capitalize font-bold text-[#141852]'>teeth whitening</h3>
                    <p>Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels.</p>
                </div>
            </div>

            <div className="hero text-gray-800)">
                <div className="hero-content flex-col md:flex-row gap-6">
                    <div className='flex justify-center md:w-1/2'>
                    <img src={treatmentImg} alt='doctors chair' className='lg:w-[70%] rounded' />
                    </div>
                    <div className='md:w-1/2'>
                        <h1 className="text-4xl lg:text-5xl font-bold capitalize text-[#8e85cf] mb-2">Exceptional dental</h1>
                        <h1 className="text-4xl lg:text-5xl font-bold capitalize text-[#8e85cf]">care, On your dream</h1>
                        <p className="py-6 text-justify text-[#373f63]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] hover:bg-gradient-to-l duration-300">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service