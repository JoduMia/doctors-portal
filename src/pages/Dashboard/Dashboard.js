import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const { data: bookings, isLoading, isError } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user.email}`);
            const data = await res.json();
            return data;
        }
    })



    return (


        <div className='px-3 lg:px-0 bg-white'>
            {
                isLoading
                    ? <div className='flex flex-col items-center py-20 text-center'>
                        <progress className="progress progress-success w-56 block" ></progress>
                        <p className='text-success text-lg font-medium'>Loading...</p>
                    </div>
                    :
                    isError
                        ? <div className='flex items-center justify-center h-[80vh]'>
                            <h3 className='text-red-600 font-bold text-3xl'>Something went wrong</h3>
                        </div>
                        :
                        bookings
                            ?
                            <div className="overflow-x-auto">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th>Treatment</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            bookings.map(({_id, patientName, disease, date, slot},i) => (
                                                <tr key={_id}>
                                                    <th>{i+1}</th>
                                                    <th>{patientName}</th>
                                                    <td>{disease}</td>
                                                    <td>{date}</td>
                                                    <td>{slot}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            :
                            null
            }
        </div>

    )
}

export default Dashboard