import React, { useState } from 'react'
import AppointmentBanner from '../../components/sections/ForAppointment/Appointment'
import AvailableAppointment from '../../components/sections/ForAppointment/AvailableAppointment';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <AvailableAppointment selectedDate={selectedDate} />

    </>
  )
}

export default Appointment