import React from 'react';
import appointmentBg from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'

const Appointment = () => {
    return (
        <div style={{ backgroundImage: `url(${appointmentBg})` }} className='md:h-[450px] lg:h-[523px] relative py-28 bg-cover bg-no-repeat'>
            <div className='md:absolute bottom-0'>
                <div className='grid md:grid-cols-2 items-center justify-between gap-5'>
                    <div className='hidden md:block'>
                        <img src={doctor} alt="doctor imag" />
                    </div>
                    <div className='p-6 space-y-4'>
                        <h3 className='text-2xl font-semibold text-[#19d3ae] capitalize'>appointment</h3>
                        <h1 className='capitalize text-3xl font-semibold text-white'>make an appointment today</h1>

                        <p className='text-white text-justify lg:w-[90%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                        <button className="btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] hover:bg-gradient-to-l duration-300">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment