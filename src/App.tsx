
import './App.css'
import NavBar from './components/navbar';
import Cardds from './components/cards';
import Doctor from './components/doctor';
import "@fontsource/poppins";

function App() {

  return (
    <div className='container'>
      <div className='div1'>
        
      <NavBar/>
    
      </div>
      <div className='div2'>

      <Cardds/>

      </div>
      <div className='div3' style={{borderRadius: '10px', margin:'1px'}}>
        <Doctor/>
      </div>
    </div>
  );
}

export default App
