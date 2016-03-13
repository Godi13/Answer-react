import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Nav from './components/Nav';
import './styles/main.scss';

import Home from './components/Home';
import Cp from './components/Cp/Cp';
import Bx from './components/Cp/Bx';
import Air from './components/Cp/Air';

import Jz from './components/Jz/Jz';
import Hyjy from './components/Jz/Hyjy';
import Jylw from './components/Jz/Jylw';

import Xgt from './components/Xgt/Xgt';
import Afh from './components/Xgt/Afh';
import Zybs from './components/Xgt/Zybs';
import Contact from './components/Contact';



ReactDOM.render((
<Router history={browserHistory}>
  <Route path="/" component={Home} />
    <Route path="cp" component={Cp} />
      <Route path="cp/bx" component={Bx} />
      <Route path="cp/air" component={Air} />
    <Route path="jz" component={Jz} />
      <Route path="jz/hyjy" component={Hyjy} />
      <Route path="jz/jylw" component={Jylw} />
    <Route path="xgt" component={Xgt} />
      <Route path="xgt/afh" component={Afh} />
      <Route path="xgt/zybs" component={Zybs} />
    <Route path="contact" component={Contact} />
</Router>
),document.getElementById('root'));
