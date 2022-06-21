import React from "react"
import '../style-sheets/button.css'


function Button({ text, clickOnButton, clickHandler }){
   return(
         <button 
         className={ clickOnButton ? 'button-click' : 'restart-button' } 
         onClick={clickHandler}>
            { text }
         </button>
   );
}

export default Button;