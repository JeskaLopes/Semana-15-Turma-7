import React from 'react';
//paginas
import Home from './paginas/Home'
//componentes
import Nav from './componentes/navbar/Nav'
import Cadastro from './paginas/cadastro/Cadastro.js'
import Chat from './paginas/Chat'
import {Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Switch>
      <div>
        <Route path = '/' exact component={Home}/>
        <Route path ='/cadastro'  component={Cadastro} />
        <Route path='/chat' component={Chat} />
        <Nav /> 
        </div>
    </Switch>
  );
}

export default App;
