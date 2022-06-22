import './App.css';
import Logo from './components/Logo.jsx';
import Button from './components/Button.jsx';
import Pantalla from './components/Pantalla.jsx';
import ButtonClear from './components/ButtonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if(input) {
      setInput(evaluate(input));
    } else {
      alert('Campo vacio!');
    }
  };


  return (
    <div className="App">
      <Logo/>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div 
          className='fila'>
          <Button 
          clickHandler={addInput}>7</Button>
          <Button 
          clickHandler={addInput}>8</Button>
          <Button 
          clickHandler={addInput}>9</Button>
          <Button
          clickHandler={addInput}>+</Button>
        </div>
        <div 
          className='fila'>
        <Button
        clickHandler={addInput}>4</Button>
        <Button
        clickHandler={addInput}>5</Button>
        <Button
        clickHandler={addInput}>6</Button>
        <Button
        clickHandler={addInput}>-</Button>
        </div>
        <div 
          className='fila'>
        <Button
        clickHandler={addInput}>1</Button>
        <Button
        clickHandler={addInput}>2</Button>
        <Button
        clickHandler={addInput}>3</Button>
        <Button
        clickHandler={addInput}>*</Button>
        </div>
        <div 
          className='fila'>
        <Button clickHandler={calculateResult}> =</Button>
        <Button
        clickHandler={addInput}>0</Button>
        <Button
        clickHandler={addInput}>.</Button>
        <Button
        clickHandler={addInput}>/</Button>
        </div>
        <div 
          className='fila'>
          <ButtonClear 
          clickHandler={() =>  setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
