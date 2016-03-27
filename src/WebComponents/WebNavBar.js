import React from 'react';
import { Link } from 'react-router';

class WebNavBar extends React.Component {
  render() {
    return (
        <div style={{height: '9vh', background: '#CCC', width: '100%'}}>
          <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_01.png" style={{width: 'auto', height: '7vh', padding: '0.5%', position: 'absolute', left: '15%'}}/>
          <div style={{width: '45%', position: 'absolute', left: '40%', display: 'flex', height: '9vh', alignItems: 'center'}}>
            <Link to="/website/webhome" style={{flex: 1}}>HOME/首页</Link>
            <Link to="/website/webabout" style={{flex: 1}}>ABOUT/简介</Link>
            <Link to="/website/webcontact" style={{flex: 1}}>CONTACT/联系</Link>
            <Link to="/website/webjoinus" style={{flex: 1}}>JOIN US/招聘</Link>
          </div>
        </div>
    );
  }
}
export { WebNavBar as default };
