import './App.css';
import counterImage from './images/logo-counter.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const clickHandler = () => {
    setNumClicks(numClicks + 1);
  };

  const restartCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='logo-contendor'>
        <img className='logo-principal'
        src={counterImage}
        alt='Logo-counter' />
      </div>
      <div className='contenedor-principal'>
        <Counter 
        numClicks={numClicks} />
        <Button
        text='Click'
        clickOnButton={true}
        clickHandler={clickHandler} />
        <Button
        text='Restart'
        clickOnButton={false}
        clickHandler={restartCounter} />
      </div>
    </div>
  );
}

export default App;


