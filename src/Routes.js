import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Paulista from './pages/Paulista';
import Mineiro from './pages/Mineiro';
import MarcadorP from './pages/MarcadorP';
import MarcadorM from './pages/MarcadorM';
import Initial from './pages/Inicial';
import Calculos from './pages/Calculos';
import CalcMedia from './pages/Media';
import CalcCalcula from './pages/Calculadora';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Initial} />
        <Route path="/Calculo" component={Calculos} />
        <Route path="/Media" component={CalcMedia} />
        <Route path="/Calculadora" component={CalcCalcula} />
        <Route path="/Historia" component={Main} />
        <Route path="/Paulista" component={Paulista} />
        <Route path="/Mineiro" component={Mineiro} />
        <Route path="/Marcador-Paulista" component={MarcadorP} />
        <Route path="/Marcador-Mineiro" component={MarcadorM} />
      </Switch>
    </BrowserRouter>
  )
}