import React from 'react'

//props = {
//    srcImagem={Astronauta},
//    altImagem='icone astronauta',
//    titulo='Pessoa Fisica',
//    valorImagem="PF",
//    acaoBotao={props.alteraConteudo}
//}

function BotaoCadastro(props){
    return(
    <button className="botao-icone" onClick={()=> props.acaoBotao(props.valorImagem)}>
        <img className="botao-imagem" src={props.srcImagem} alt={props.altImagem}/>
        <span>{props.titulo}</span>
    </button>
    )
}

export default BotaoCadastro