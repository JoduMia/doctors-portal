import React from 'react';
import {format} from "date-fns";

const AvailableAppointment = ({selectedDate}) => {
    console.log(selectedDate);
  return (
    <div>
        {selectedDate &&
            <p className='text-2xl text-[#19d3ae] font-semibold text-center capitalize'>Availabe appointments on {format(selectedDate, 'PP')}.</p>
        }
    </div>
  )
}

export default AvailableAppointment