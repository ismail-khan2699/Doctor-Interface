import './doctor.css'
import SCard from '../cards/squarecard'
import DoctorCard from '../cards/Doc-Card'
import RectangularWImg from '../cards/recwimg'

function Carddiv() {
  return (
    <div className='flex-container scrollbar' style={{overflowX:'auto', overflowY:'hidden'}}>
  <div>
    <div className='flex-container'>
      <div>
          <SCard imgSrc={`src/assets/heart.svg`} paragraphText="Heart" backgroundColor="#FFECCA" />
          <SCard imgSrc={`src/assets/bone.svg`} paragraphText="Bone" backgroundColor="#D5F1F5" />
      </div>
      
      <DoctorCard imgSrc="src/assets/d2.png" name="Dr. Seagrill Grille" title="Dermatologist" bgColor="#FFCDD4" />
      <div>
        <div className='flex-container'>
        <RectangularWImg img="src/assets/Radiology.svg" p="Radiologist" bgColor="#F0E4FF"   width='190px' />
        <RectangularWImg  p="Oncologist" bgColor="#FFECCA"   width='108px' />
        </div>
        <div className='flex-container'>
        <RectangularWImg img="src/assets/teeth.svg" p="Dentist" bgColor="white"   width='128px' />
        <SCard imgSrc={`src/assets/liver.svg`} paragraphText="Liver" backgroundColor="#FFCDD4" />
        <SCard imgSrc={`src/assets/knee.svg`} paragraphText="Knee" backgroundColor="#F0E4FF" />
        
        </div>
      </div>
    </div>
    <div className='flex-container'>
    <RectangularWImg img="src/assets/ophthalmology.svg" p="Ophthalmologist" bgColor="#f0e4ff"   width='190px' />
    <RectangularWImg  p="Surgeon" bgColor="#EAEAEA"   width='140px' />
    <RectangularWImg p="Physiatrist & Mental Health" bgColor="#ffecca"   width='190px' />
    </div>
  </div>
  <div>
    <RectangularWImg p='Pediatrition' width='133px' bgColor='#d5f1f5' />
    <DoctorCard imgSrc="src/assets/d1.png" name="Dr. Jhony Grille" title="Dermatologist" bgColor="white" />
  </div>
</div>
  )
}

export default Carddiv