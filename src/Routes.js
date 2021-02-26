import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Paulista from './pages/Paulista'

export default function Routes(){
  return(
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Truco-Paulista" component={Paulista} />
      </Switch>
      </BrowserRouter>
  )
}