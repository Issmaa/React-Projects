import React from 'react'
import '../style-sheets/counter.css'

function Counter({ numClicks }){

   return (
      <div className='contador-principal'>
         {numClicks}
      </div>
   )
}

export default Counter;