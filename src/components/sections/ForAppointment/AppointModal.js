import React from 'react';
import { format } from 'date-fns'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const AppointModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots,_id } = treatment; //treatment means selected disease from the options
    const { user } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        const date = form.date.value;
        const slot = form.slot.value;
        const service = _id;

        const doc = {patientName, email, phone, message, date, slot, service};
        fetch(`http://localhost:5000/schedule` , {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(doc)
        }).then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success("Appointments taken successfully");
            }
        })
        setTreatment(null);
    };

    return (
        <div>
            <input type="checkbox" id="booking-appointment" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-white relative">
                    <label htmlFor="booking-appointment" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-[#19d3ae] py-4">Congratulations to "{name}" appointment</h3>

                    <form onSubmit={handleSubmit} className='space-y-3 text-[#161056]'>
                        <input type="text" name='date' defaultValue={selectedDate && (format(selectedDate, 'PP'))} disabled className="input input-bordered input-accent w-full bg-white disabled:bg-gray-300 border-none disabled:text-black disabled:font-medium block text-center" />

                        <select name='slot' required className="select select-success bg-white text-[#161056] w-full">
                            <option disabled >Select Your Time</option>
                            {slots.map((slot, index) => <option value={slot} key={index}>{slot}</option>)}
                        </select>


                        <input type="text" placeholder="Your Name" defaultValue={user?.displayName} name='name' disabled required className="input input-bordered input-accent w-full bg-white disabled:bg-gray-300
                            disabled:text-black " />
                        <input type="email" defaultValue={user?.email} disabled name='email' placeholder="Email address" className="input input-bordered input-accent w-full bg-white disabled:bg-gray-300
                        disabled:text-black " />

                        <input type="number" placeholder="Phone" required name='phone' className="input input-bordered input-accent w-full bg-white" />
                        <textarea cols='5' name='message' required rows='10' type="text" placeholder="Briefly write about disease." className="input input-bordered input-accent w-full bg-white" />
                        <div className='text-center'>
                            <button type='submit' className="btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] hover:bg-gradient-to-l duration-300 block w-[200px] mx-auto">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AppointModal