import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Nav from './components/Nav';
import './styles/main.scss';

import Home from './Home';

import App from './components/App';
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

import WebSite from './WebComponents/WebSite';
import WebHome from './WebComponents/WebHome';
import WebAbout from './WebComponents/WebAbout';
import WebContact from './WebComponents/WebContact';
import WebJoinUs from './WebComponents/WebJoinUs';

import WebHYJY from './WebComponents/Works/WebHYJY';

ReactDOM.render((
<Router history={browserHistory}>
  <Route path="/" component={Home}>
    <Route path="/phone" compoent={App}/>
    <Route path="/cp" component={Cp} />
      <Route path="/cp/bx" component={Bx} />
      <Route path="/cp/air" component={Air} />
    <Route path="/jz" component={Jz} />
      <Route path="/jz/hyjy" component={Hyjy} />
      <Route path="/jz/jylw" component={Jylw} />
    <Route path="/xgt" component={Xgt} />
      <Route path="/xgt/afh" component={Afh} />
      <Route path="/xgt/zybs" component={Zybs} />
    <Route path="/contact" component={Contact} />

    <Route path="/website" component={WebSite}>
      <Route path="/website/webhome" component={WebHome} />
        <Route path="/website/hyjy" component={WebHYJY} />
      <Route path="/website/webabout" component={WebAbout} />
      <Route path="/website/webcontact" component={WebContact} />
      <Route path="/website/webjoinus" component={WebJoinUs} />
      <IndexRoute component={WebHome} />
    </Route>

    <IndexRoute component={App} />
  </Route>
</Router>
),document.getElementById('root'));
