import React from 'react';
import '../style-sheets/Logo.css'
import logoCalculator from '../images/logo-calculator.png';

const Logo = () => {
   return (
   <div className='logo-calculadora-contenedor'>
        <img 
          src={logoCalculator}
          className='logo-calculadora'
          alt='Logo calculadora'/>
      </div>
   )
}

export default Logo;