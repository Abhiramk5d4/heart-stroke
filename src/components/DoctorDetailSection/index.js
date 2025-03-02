import React, {useState} from 'react'
import './index.css'

export default function DoctorDetailSection() {
  const [selectedDay, setSelectedDay] = useState('MON')
  const [selectedTime, setSelectedTime] = useState('9:00 am')

  const days = [
    {day: 'MON', date: 3},
    {day: 'TUE', date: 4},
    {day: 'WED', date: 5},
    {day: 'THU', date: 6},
    {day: 'FRI', date: 7},
    {day: 'SAT', date: 8},
  ]

  const times = [
    '8:00 am',
    '8:30 am',
    '9:00 am',
    '9:30 am',
    '10:00 am',
    '10:30 am',
    '11:00 am',
    '11:30 am',
  ]

  return (
    <div className="header-detail">
      <h1 className="hq">Doctor Consultation</h1>
      <div className="container-detail">
        <div className="doctor-card">
          <img
            src="https://s3-alpha-sig.figma.com/img/ac75/d4ee/12df02d6bf011b7250dccfb481b7d95f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Tf1CaB9oSWMRs9MHRvSbmkTQvtaX71hv0Zv4WFclk~52alThzcP6JYvLyIiRlGtFyFSYjDyYhdTrMUd5bDgx~Ry~bJaHADBfIH4JjWOO2C0-woo2SiDOizdQwOfb6EduPShsBmljxWQoL7EX314oTOCVb9NbLiQSOupM4wNvkpqpoT2fz9qY~SxQrwLMGSEApkva~V1P352l9jjhCR9iuI4kTqfZiHAuAvODMEZR-xtQUJBtUcpFnKB34WRO71magC7Bb-hbWakAlxMg6VtxovrREuxhiVsFIrPQ8c1dh4uG28Zl3AbyV39bRM4rZYAhWY-NRWAuNZvpUgZBnVaprg__"
            alt="Dr S N Pathak"
            className="doctor-image-detail"
          />
          <div className="doctor-info">
            <h2>Dr S N Pathak</h2>
            <p>MBBS, MD (Medicine), DM (Cardiology)</p>
            <p className="about-title">About</p>
            <p className="bold-text">17 Years, Cardiologist</p>
            <p>
              Dr. S N Pathak is a Cardiologist with 17 Years of Experience. He
              is affiliated with Apollo Hospitals Indraprastha in Delhi. He
              holds MBBS, MD (Medicine), DM (Cardiology) and speaks English.
            </p>
            <p className="bold-text">Appointment fee: ₹800</p>
            <p className="booking-title">Booking slots</p>
            <div className="days-container">
              {days.map(d => (
                <button
                  key={d.date}
                  className={`day-button ${
                    selectedDay === d.day ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedDay(d.day)}
                >
                  <span>{d.day}</span>
                  <span>{d.date}</span>
                </button>
              ))}
            </div>
            <div className="times-container">
              {times.map(time => (
                <button
                  key={time}
                  className={`time-button ${
                    selectedTime === time ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
            <button className="book-appointment">Book an Appointment</button>
          </div>
        </div>
      </div>
    </div>
  )
}
