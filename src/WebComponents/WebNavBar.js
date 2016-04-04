import React from 'react';
import { Link } from 'react-router';

class WebNavBar extends React.Component {
  render() {
    return (
        <div style={{height: '9vh', background: '#CCC', width: '100%', position: 'fixed', zIndex: 9999}}>
          <Link to="/website/webhome">
            <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/logo.png" style={{width: 'auto', height: '7vh', padding: '0.5%', position: 'absolute', left: '15%'}}/>
          </Link>
          <div style={{width: '45%', position: 'absolute', left: '40%', display: 'flex', height: '9vh', alignItems: 'center'}}>
            <Link to="/website/webhome" activeStyle={{color: '#555'}} style={{flex: 1, color: '#999'}}>HOME/首页</Link>
            <Link to="/website/webabout" activeStyle={{color: '#555'}} style={{flex: 1, color: '#999'}}>ABOUT/简介</Link>
            <Link to="/website/webcontact" activeStyle={{color: '#555'}} style={{flex: 1, color: '#999'}}>CONTACT/联系</Link>
          </div>
        </div>
    );
  }
}
export { WebNavBar as default };
