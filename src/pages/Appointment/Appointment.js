import React, { useState } from 'react'
import AppointmentBanner from '../../components/sections/ForAppointment/Appointment'
import AppointModal from '../../components/sections/ForAppointment/AppointModal';
import AvailableAppointment from '../../components/sections/ForAppointment/AvailableAppointment';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [treatment, setTreatment] = useState(null);

  return (
    <>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <AvailableAppointment selectedDate={selectedDate} setTreatment={setTreatment}/>
      {
        treatment &&
        <AppointModal
        setTreatment={setTreatment}
        treatment={treatment}
        selectedDate={selectedDate}/>
      }
    </>
  )
}

export default Appointment