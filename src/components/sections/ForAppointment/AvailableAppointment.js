import React, { useState } from 'react';
import {format} from "date-fns";
import { useEffect } from 'react';

const AvailableAppointment = ({selectedDate, setTreatment}) => {
    const [loading, setLoading] = useState(false);
    const [appoints, setAppoints] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('data.json')

        .then(res => res.json())
        .then(data => {
            setAppoints(data);
            setLoading(false)
        })
    },[])
  return (
    <div className='px-6 py-10 '>
        {selectedDate &&
            <p className='text-xl text-[#19d3ae] font-semibold text-center capitalize'>Availabe appointments on {format(selectedDate, 'PP')}.</p>
        }

        {
            !loading ?
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                {appoints.map((appoint) => {
                    const {name,_id,slots} = appoint;
                    return <div key={_id} className='px-10 py-6 shadow-md rounded-md text-center space-y-4 text-[#0d1044]'>
                        <h1 className='text-[#19d3ae] font-semibold text-xl'>{name}</h1>
                        <p>{slots.length > 0 ? slots[0] : 'Try another day !!!'}</p>
                        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} are availabe.</p>


                        <label
                        onClick={() => setTreatment(appoint)}
                        htmlFor='booking-appointment'
                        disabled={slots.length === 0}

                        className=" w-[70%] mx-auto btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] hover:bg-gradient-to-l duration-300 uppercase disabled:!text-opacity-100">

                        Book appointment
                        </label>
                    </div>
                })}
            </div>
            :
            <div className='flex flex-col items-center py-20 text-center'>
                <progress className="progress progress-success w-56 block" ></progress>
                <p className='text-success text-lg font-medium'>Loading...</p>
            </div>
        }
    </div>
  )
}

export default AvailableAppointment