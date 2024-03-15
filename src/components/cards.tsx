import { useState } from 'react';
import './cards.css';

function Cardds() {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

const handleCardClick = (index: number) => {
  setClickedIndex((prevState) => (prevState === index ? null : index));
};


  const svgList = [
    { id: 1, name: 'Doctor', pic: 'doctor.svg' },
    { id: 2, name: 'Hospital', pic: 'Hlocation.svg' },
    { id: 3, name: 'Ambulance', pic: 'ambulence.svg' },
    { id: 4, name: 'Medicine', pic: 'Medicines.svg' },
    { id: 5, name: 'Nursing', pic: 'nurse.svg' },
    { id: 6, name: 'Medicine', pic: 'drip.svg' },
    { id: 7, name: 'Covid - 19', pic: 'Covid.svg' },
    { id: 8, name: 'Lab Test', pic: 'Lab.svg' },
    { id: 9, name: 'Tele Health', pic: 'telemed.svg' },
    { id: 10, name: 'Education ', pic: 'notebook.svg' },
  ];

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
      <p style={{fontSize:'1.2rem', margin:'10px', fontWeight:'bold'}}>What do you need?</p>
      <p style={{ marginLeft: '20px', marginBottom:'10px' }}>Select your requirement</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5px' }} className="Gridclass">
        {svgList.map((data, index) => (
              <a key={data.id} href="#" onClick={() => handleCardClick(index)}>
          <div className={`card ${index === clickedIndex ? 'clicked' : ''} `}>
              <div className={`card-image ${index === clickedIndex ? 'clicked' : ''}`}>
                <img src={`/assets/${data.pic}`} width={30} height={30} alt="Profile Image"  
                className={`imgs ${index === clickedIndex ? 'clicked' : ''}`}
                />
              </div>
              <div className="card-content">
                <p style={{fontSize:'0.7rem'}}>{data.name}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Cardds;
