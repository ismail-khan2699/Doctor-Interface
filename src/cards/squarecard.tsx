import React from 'react';
import './Squarecard.css'

interface CardProps {
  imgSrc: string;
  paragraphText: string;
  backgroundColor: string;
}

const SCard: React.FC<CardProps> = ({ imgSrc, paragraphText, backgroundColor }) => {
  return (
    <a className='fiftyeight' style={{ backgroundColor }} href='#'>
      <img src={imgSrc} alt={imgSrc} />
      <p>{paragraphText}</p>
    </a>
  );
};

export default SCard;
