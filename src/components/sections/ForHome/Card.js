import React from 'react';
import { ImClock } from 'react-icons/im';
import { MdLocationOn } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';

const Card = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-6'>
            <div className='bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] hover:bg-gradient-to-l py-2 px-3 flex items-center rounded-md gap-3'>
                <div className='w-[50%]'>
                    <ImClock size={'5x'} className='text-white font-bold' />
                </div>
                <div className='text-white space-y-2'>
                    <h1 className='text-2xl font-semibold'>Opening Hours</h1>
                    <p>We Provide 24/7 services to all of our patients.A bundle of opportunity is to get the proper services on time.</p>
                </div>
            </div>

            <div className='bg-gradient-to-r from-[#3a4256] to-[#5269a5] hover:bg-gradient-to-l py-2 px-3 flex items-center rounded-md gap-3'>
                <div className='w-[20%]'>
                    <MdLocationOn size={'5x'} className='text-white font-bold' />
                </div>
                <div className='text-white space-y-2'>
                    <h1 className='text-2xl font-semibold'>Our Location</h1>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>

            <div className='bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] hover:bg-gradient-to-l py-2 px-3 flex items-center rounded-md gap-3'>
                <div className='w-[20%]'>
                    <FiPhoneCall size={'5x'} className='text-white font-bold' />
                </div>
                <div className='text-white space-y-2'>
                    <h1 className='text-2xl font-semibold'>Contact Us</h1>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    )
}

export default Card