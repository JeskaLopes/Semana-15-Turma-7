import React from 'react';
import Inicial from './Inicial'
import '../cadastro/cadastro.css'

class Cadastro extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div className='cadastro'>
                <Inicial />
            </div>
        )
    }   
}

export default Cadastro;