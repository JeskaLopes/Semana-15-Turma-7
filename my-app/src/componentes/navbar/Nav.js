import React from 'react';
import Logo from '../../imagens/RocketChat.png'
import Menu from './menu/Menu'
import './navbar.css'

export default function Nav(props){
    return(
        <nav className="navbar">
            <div>
                <img className='navbar-logo' src={Logo} alt="Logotipo RocketChat"/>
            </div>
            <Menu />
        </nav>
    )
}
