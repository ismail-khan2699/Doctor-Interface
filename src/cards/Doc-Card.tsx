// DoctorCard.tsx
import './Doc-Card.css'
import React from 'react';

interface DoctorCardProps {
  imgSrc: string;
  name: string;
  title: string;
  bgColor: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ imgSrc, name, title, bgColor }) => {
  return (
    <a className='doc-Card' style={{ backgroundColor: bgColor }} href='#'>
      <img src={imgSrc} alt="Profile Image" />
      <p style={{ fontWeight: 'bold', fontSize: '0.7rem', marginTop:'15px' }}>{name}</p>
      <p style={{ color: 'gray' }}>{title}</p>
    </a>
  );
};

export default DoctorCard;
