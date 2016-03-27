import React from 'react';
import { Link } from 'react-router';

class WebHome extends React.Component {
  render() {
    return (
        <div style={{paddingTop: '1%', paddingLeft: '2%', paddingBottom: '2%'}}>
          <div style={{float: 'left', width: '39%'}}>
            <Link to="/website/hyjy">
              <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_02.png"
                   style={{width: '100%', marginBottom: 15}}/>
            </Link>
            <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_03.png"
                 style={{width: '100%', marginBottom: 15}}/>
            <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_04.png"
                 style={{width: '100%'}}/>
          </div>

          <div style={{float: 'left', width: '38.5%', margin: '0 20px'}}>
            <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_07.png"
                 style={{width: '100%'}}/>
               <div style={{width: '100%', marginTop: 15}}>
                <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_08.png"
                 style={{width: '53.5%', float: 'left'}}/>
               <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_09.png"
                 style={{width: '45%', float: 'right'}}/>
              </div>
          </div>

          <div style={{float: 'left', width: '18.5%'}}>
            <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_11.png"
                 style={{width: '100%', marginBottom: 15}}/>
            <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_12.png"
                 style={{width: '100%', marginBottom: 20}}/>
          </div>
          <div>
            <div style={{width: '24.5%', float: 'left'}}>
              <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_05.png"
                   style={{width: '100%', marginBottom: 15}}/>
              <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_06.png"
                   style={{width: '100%'}}/>
            </div>
            <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_10.png"
                   style={{width: '33%', margin: '0 20px', float: 'left'}}/>
            <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_13.png"
                 style={{width: '38.5%'}}/>
          </div>
        </div>
    );
  }
}
export { WebHome as default };
