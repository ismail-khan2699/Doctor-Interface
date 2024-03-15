import { useState } from 'react';
import './navbar.css';

function NavBar() {
  const svgList = [
    "menu.svg",
    "menub.svg",
    "plus.svg",
    "calender.svg",
    "beat.svg",
    "patient.svg",
    "bell.svg",
    "camera.svg",
    "settings.svg",
    "logo.png",
    "logout.svg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorTop, setIndicatorTop] = useState(18);

  const handleItemClick = (index: number) => {
    if (index !== svgList.length - 1) {
      setActiveIndex(index);
      setIndicatorTop(18 + index * 44.33);
    }
  };

  return (
    <div className='ontop'>
      <a href='./'>
        <img src='/assets/logo.png' height={47} width={47} className='logoimg' alt='Logo' />
      </a>
      <ul className="vertical-svg-list" >
        <div style={{ height: '5px' }}></div>
        {svgList.map((svgFilename, index) => (
  <li
    key={index}
    className={`svg-list-item ${activeIndex === index ? 'active' : ''}`}
    onClick={() => handleItemClick(index)}
  >
    <a href='#'>
      <img
        src={`/assets/${svgFilename}`}
        alt={svgFilename}
        height={27}
        width={27}
        className={index === 9 ? '' : 'invert-image'} // Exclude filter for the 10th index
      />
    </a>
  </li>
))}

        <div style={{ height: '5px' }}></div>
        <div className='indicator' style={{ top: `${indicatorTop}px` }}></div>
      </ul>
    </div>
  );
}

export default NavBar;
