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
        <div class="xpInformation">
          <XPImage num={userXP}></XPImage>
          <h1 className="userXPValue">{`${userXP} XP`}</h1>
        </div>
      </div>
    </>
  )
}

export default App
