import React from 'react';
import { DayPicker } from 'react-day-picker';
import bannerImg from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='min-h-[500px] px-6'>
            <div  className='min-h-[500px] flex items-center'>
                <div className="hero text-gray-800)">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={bannerImg} alt='doctors chair' className='lg:w-1/2' />
                        <div className='w-1/2 flex justify-center'>
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentBanner