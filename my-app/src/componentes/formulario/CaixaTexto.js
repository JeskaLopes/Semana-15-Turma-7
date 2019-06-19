import React from 'react'


function CaixaTexto(props){
    function valida(e){
        props.onChange(e.target.name, e.target.value)
    }

    return(
        <input 
            className="campo"
            type={props.type}
            placeholder={props.placeholder}
            id={props.id}
            value={props.id}
            name={props.name}
            onChange={props.onChange}
        />
    )
}


export default CaixaTexto