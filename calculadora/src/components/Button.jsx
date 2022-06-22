import React from 'react';
import '../style-sheets/Button.css'

function Button(props){

  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  let claseButton = 'boton-contenedor';

  if(esOperador(props.children)){
    claseButton = 'boton-contenedor operador';
  }

  // {`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
   return(
      <div className={claseButton}
      onClick={() => props.clickHandler(props.children)}>
        {props.children}
      </div>
   )
};

export default Button;