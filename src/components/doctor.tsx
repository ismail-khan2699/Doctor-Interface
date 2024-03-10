import './doctor.css'

import Carddiv from './carddiv'
import AppointmentCard from '../cards/AppointmentCard';

function Doctor() {
  const appointmentData = [
    {
      imgSrc: 'd1.png',
      docName: 'Dr. Jhonny Grille',
      place: 'Oliver Medical Center',
      occupation: 'Therapist',
      title: 'Psychiatrist',
      appointmentDate: '14 Aug 2024',
      appointmentTime: '01:10 PM',
      locationLink: '#',
      calendarLink: '#',
      refreshLink: '#',
      docLink:'#1'
    },
    {
      imgSrc: 'd2.png',
      docName: 'Dr. Segril Grille',
      place: 'Canberra Medical Unit',
      occupation: 'Dermatologist',
      title: 'Skin & Hair Specialist',
      appointmentDate: '21 Aug 2024',
      appointmentTime: '12:10 PM',
      locationLink: '#',
      calendarLink: '#',
      refreshLink: '#',
      docLink:'#2'
    },
    {
      imgSrc: 'd3.png',
      docName: 'Dr. Dua Mughal',
      place: 'Austin Medical Center',
      occupation: 'Neurologist',
      title:'Spinal cord and Nerves',
      appointmentDate: '26 Aug 2024',
      appointmentTime: '04:30 PM',
      locationLink: '#',
      calendarLink: '#',
      refreshLink: '#',
      docLink:'#3'
    },
  ];
  return (
    <div style={{margin:'10px'}}>
      <div className="flex-container" style={{justifyContent:'space-between'}}> 
      <p style={{fontSize:'1.5rem', margin:'0px', fontWeight:'bold'}}>Find Doctor <br/><span style={{fontSize: '0.9rem',fontWeight:'normal', color:'GrayText'}}>Make an appointment, Find a doctor</span></p>
       <div className="flex-container" style={{alignItems:'center', marginRight:'20px',  marginLeft:'20px'}}>
          <a className='button' href='#'>
          <img src="src/assets/search.svg" alt="search"/>
          </a>
          <a href='#' className='bt' >See All</a>
      </div>
    </div> 
<div className="cardcollection "> 
<Carddiv/>
</div>
<div className='flex-container' style={{justifyContent:'space-between'}}>
  <p style={{fontSize:'1.5rem', margin:'0px', fontWeight:'bold'}}>Your Appointments <br/><span style={{fontSize: '0.9rem',fontWeight:'normal', color:'GrayText'}}>Your appointments are listed here.</span></p>
  <div className="flex-container" style={{alignItems:'center', marginRight:'20px',  marginLeft:'20px'}}>
          <a className='button' href='#'>
          <img src="src/assets/search.svg" alt="search"/>
          </a>
          <a className='button' href='#'>
          <img src="src/assets/calender2.svg" alt="schedule"/>
          </a>
          <a className='button bt2' href='#'>
            <img src="src/assets/plus1.svg" alt="Add"/>
          </a>
      </div>
</div>
<div className='flex-container' style={{overflowX:'auto'}}>
<AppointmentCard data={appointmentData} />



</div>
</div>
  )
}

export default Doctor