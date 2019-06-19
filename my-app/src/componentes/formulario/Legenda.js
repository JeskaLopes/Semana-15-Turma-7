import React from 'react'

 function Legenda (props){
     return(
         <label htmlFor={props.htmlForLegenda}>
             {props.children}
         </label>
     )

 }

export default Legenda