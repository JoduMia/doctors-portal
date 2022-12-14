import React, { useState } from 'react';
import { format } from "date-fns";
import { useQuery } from '@tanstack/react-query';
import AppointModal from './AppointModal';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);


    //checking if date is deselected then it will not give an error.
    const date = selectedDate ? format(selectedDate, 'PP') : null;

    const { data: appoints, isLoading, isError, refetch } = useQuery({
        queryKey: ['appoints', date],
        queryFn: () => fetch(`http://localhost:5000/appoints?date=${date}`)
            .then(res => {
                return res.json();
            })
    })

    // useEffect(() => {
    //     setLoading(true);
    //     fetch('http://localhost:5000/appoints')
    //         .then(res => {
    //             console.log(res);
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //             setAppoints(data);
    //             setLoading(false)
    //         })
    // }, [])
    return (
        <div className='px-6 py-10 '>
            {selectedDate &&
                <p className='text-xl text-[#19d3ae] font-semibold text-center capitalize'>Availabe appointments on {format(selectedDate, 'PP')}.</p>
            }

            {
                isLoading
                    ?
                    <div className='flex flex-col items-center py-20 text-center'>
                        <progress className="progress progress-success w-56 block" ></progress>
                        <p className='text-success text-lg font-medium'>Loading...</p>
                    </div>
                    : isError
                        ?
                        'Error!'
                        : appoints
                            ? <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                                {appoints.map((appoint) => {
                                    const { name, _id, slots } = appoint;
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
                            null
            }

            {/* {
                !isLoading ?
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                        {appoints.map((appoint) => {
                            const { name, _id, slots } = appoint;
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
            } */}

            <div>
                {
                    treatment &&
                    <AppointModal
                        setTreatment={setTreatment}
                        treatment={treatment}
                        selectedDate={selectedDate}
                        refetch={refetch}
                    />
                }
            </div>
        </div>
    )
}

export default AvailableAppointment