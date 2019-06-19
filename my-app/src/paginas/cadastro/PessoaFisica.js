import React from 'react'
import Legenda from '../../componentes/formulario/Legenda';
import CaixaTexto from '../../componentes/formulario/CaixaTexto';

export default class PessoaFisica extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nomeSobrenome: {
                valor:'',
                erro:''
            },
            numeroCpf: {
                valor:'',
                erro:''
            },
            nascimento:{
                valor:'',
                erro:''
            },
            email: {
                valor:'',
                erro:''
            },
            senha: {
                valor:'',
                erro:''
            },
        }
    }

    handleSubmit = e =>{
        e.preventDefault()
        console.log('enviou')
    }

    handleChange = e =>{
        console.log(e.target, 'evento Onchange')
        this.setState({
            [e.target.name]: e.target.value
        })
    
    }

    render(){
        return (
            <div className="pagina">
                <h2>Cadastro Pessoa Fisica</h2>
                <form className="formulario" onSubmit={this.handleSubmit}>
                    <div>
                        <Legenda htmlForLegenda="nomeSobrenome"></Legenda> 
                        <CaixaTexto>
                            <input className="campo" type = "text" placeholder="Nome" id="nomeSobrenome"value={this.state.nomeSobrenome} onChange={this.handleChange} name="nomeSobrenome"/>   
                        </CaixaTexto>
                    </div>
                    <div>
                        <Legenda htmlForLegenda="numeroCpf"></Legenda> 
                        <CaixaTexto>
                            <input className="campo" type = "text" placeholder="000.000.00-00" id="numeroCpf"value={this.state.numeroCpf} onChange={this.handleChange} name="numeroCpf"/>   
                        </CaixaTexto>
                    </div>
                    <div>
                        <Legenda htmlForLegenda="nascimento"></Legenda> 
                        <CaixaTexto>
                            <input className="campo" type = "text" placeholder="dd/mm/aa" id="nascimento"value=
                            {this.state.nascimento} onChange={this.handleChange} name="nascimento"/>   
                        </CaixaTexto>
                    </div>
                    <div>
                        <Legenda htmlForLegenda="email"></Legenda> 
                        <CaixaTexto>
                            <input className="campo" type = "email" placeholder="example@" id="email"value={this.state.email} onChange={this.handleChange} name="email"/>   
                        </CaixaTexto>
                    </div>
                    <div>
                        <Legenda htmlForLegenda="senha"></Legenda> 
                        <CaixaTexto>
                            <input className="campo" type = "senha" placeholder="example@" id="senha"value={this.state.senha} 
                            onChange={this.handleChange} name="senha"/>   
                        </CaixaTexto>
                    </div>
                </form>
            </div>
        )
    }
}