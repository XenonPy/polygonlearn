import './App.css';
import { XPImage } from './components/XPImage';
import { useEffect, useState } from 'react';

const polygonLearnUserXP = () => Number(localStorage.getItem('polygonLearnUserXP')) || 0;

function App() {
  const [userXP, setUserXP] = useState(polygonLearnUserXP());

  useEffect(() => {
    localStorage.setItem('polygonLearnUserXP', userXP);
  }, [userXP]);

  return (
    <>
      <div className='dashboard'>
        <XPImage num={51}></XPImage>
        <h1 className={`${userXP} XP`}></h1>
      </div>
    </>
  )
}

export default App
