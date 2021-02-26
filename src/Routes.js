import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Paulista from './pages/Paulista';
import Mineiro from './pages/Mineiro';

export default function Routes(){
  return(
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Paulista" component={Paulista} />
        <Route path="/Mineiro" component={Mineiro} />
      </Switch>
      </BrowserRouter>
  )
}