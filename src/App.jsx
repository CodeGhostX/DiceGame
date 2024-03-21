import { useState } from 'react';
import StartGame from './components/startGame';
import GamePlay from './components/GamePlay';

const App = () => {
  const[isGameStarted,setIsGameStarted] = useState(false);
  const handleStart = () =>{
    setIsGameStarted(prev => !prev);
  }
  return (
    <div>
      {isGameStarted ? <GamePlay/> : <StartGame toggle={handleStart}/>}
    </div>
  )
}

export default App






