import React from 'react';
import bg from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div className='bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bg})` }}>
            <div className='py-10 mx-auto w-[90%] md:w-35% lg:w-[40%]'>
            <h3 className='text-2xl font-semibold text-[#19d3ae] text-center mb-2'>Contacts</h3>
            <h1 className='text-3xl text-center font-semibold pb-10 capitalize'>Stay connected with us</h1>
                <form className='space-y-3'>
                    <input type="text" placeholder="Email address" className="input input-bordered input-accent w-full bg-white" />
                    <input type="text" placeholder="Subject" className="input input-bordered input-accent w-full bg-white" />
                    <textarea cols='5' rows='10' type="text" placeholder="Subject" className="input input-bordered input-accent w-full bg-white" />
                    <div className='text-center'>
                        <button type='submit' className="btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] hover:bg-gradient-to-l duration-300 block w-[200px] mx-auto">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact