

import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Sobre from  './pages/sobre';
import Contato from './pages/contato';


ReactDom.render(
  (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/sobre" component={Sobre}></Route>
          <Route path="/contato" component={Contato}></Route>        
        </Switch>
      </App>
    </Router>
  ),
  document.getElementById('root')
);