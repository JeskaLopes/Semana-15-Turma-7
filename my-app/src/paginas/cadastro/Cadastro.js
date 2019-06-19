import React from 'react';
import Inicial from './Inicial'
import '../cadastro/cadastro.css'
import PessoaFisica from './PessoaFisica';
import PessoaJuridica from './PessoaJuridica';

class Cadastro extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            conteudo: undefined,
        }
    }

    handleMudaConteudo = (valor) => {
        this.setState({
            conteudo:valor
        })
    }
    
    render(){
        return(
            <div className='cadastro'>
                {
                    this.state.conteudo ===undefined &&
                    <Inicial alteraConteudo={this.handleMudaConteudo}/>     
                }
                {
                    this.state.conteudo === 'PF' &&
                    <PessoaFisica/>
                }
                {
                    this.state.conteudo === 'PJ' &&
                    <PessoaJuridica/>
                }
            </div>
        )
    }   
}

export default Cadastro;