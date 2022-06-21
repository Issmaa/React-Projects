import React from "react";
import '../style-sheets/card.css'


function Card(props){
   return(
      <div className="contenedor-testimonio">
         <img 
            className="imagen-testimonio" 
            src={require(`../imagenes/s${props.image}.jpg`)} 
            alt={`testimonio-${props.name}`} />
         <div className="contenedor-texto">
            <p className="nombre-testimonio">
               <strong>{props.name}</strong> en {props.country}
            </p>
            <p className="cargo-testimonio">
               {props.rol} en <strong>{props.company}</strong>
            </p>
            <p className="texto-testimonio">{props.testify}</p>
         </div>     
      </div>
   )
}

export default Card;