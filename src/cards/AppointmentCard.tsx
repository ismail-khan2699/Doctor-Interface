import React from 'react';
import '../components/doctor.css';
import './AppointmentCard.css';

interface AppointmentCardProps {
  data: {
    imgSrc: string;
    docName: string;
    place: string;
    occupation: string;
    title: string;
    appointmentDate: string;
    appointmentTime: string;
    locationLink: string;
    calendarLink: string;
    refreshLink: string;
    docLink: string;
  }[];
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <a className='Appointment-card' key={index} href={item.docLink}>
          <img src={`/assets/${item.imgSrc}`} className='main' alt="img" />
          <p>{item.docName} <br /></p>
          <span style={{ fontSize: '0.6rem', color: 'gray' }}>{item.place}</span>
          <div className='cardinCard' style={{ marginTop: '10px' }}>
            <p>{item.occupation}<br /></p>
            <span style={{ fontSize: '0.6rem', color: 'gray' }}>{item.title}</span>
          </div>
          <div className='flex-container '>
            <div className='timeDate'>
              <p>Date<br /></p>
              <span style={{ fontSize: '0.7rem', color: 'black' }}>{item.appointmentDate}</span>
            </div>
            <div className='timeDate'>
              <p>Time<br /></p>
              <span style={{ fontSize: '0.7rem', color: 'black' }}>{item.appointmentTime}</span>
            </div>
          </div>
          <div className='flex-container'>
            <a href={item.locationLink} className="logos"><img src="../assets/location.svg" alt="logo" /></a>
            <a href={item.calendarLink} className="logos"><img src="../assets/calender.svg" alt="logo" /></a>
            <a href={item.refreshLink} className="logos"><img src="../assets/refresh.svg" alt="logo" /></a>
          </div>
        </a>
      ))}
    </>
  );
};

export default AppointmentCard;
