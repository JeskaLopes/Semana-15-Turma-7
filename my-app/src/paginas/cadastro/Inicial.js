import React from 'react'
import Astronauta from '../../imagens/astronaut.png'
import Globo from '../../imagens/globe.png'

function Inicial(props){
    return(
        <div className='cadastro'>
        <div className="pagina">
            <h1>Escolha qual tipo de cadastro: </h1>
            <div className="pagina__botao">
                <button className="botao-icone">
                    <img className="botao-imagem" src={Astronauta} alt="Astronauta"/>
                    <span>Pessoa Física</span>
                </button>
                <button className="botao-icone">
                    <img className="botao-imagem" src={Globo} alt="Astronauta"/>
                    <span>Pessoa Juridica</span>
                </button>
            </div>
        </div>
    </div>
    )
    
}






export default Inicial