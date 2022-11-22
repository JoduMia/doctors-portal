import { useQuery } from '@tanstack/react-query'
import React from 'react'

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/allusers`)
                    .then(res => res.json())
                    .then(data => data)
    })
    return (
        <div className='px-4'>
            <h3>All users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(({_id, name, email}, i) => (
                                <tr key={_id}>
                                    <th>{i+1}</th>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>Blue</td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers