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
            <Link to="/website/jylw">
              <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_03.png"
                   style={{width: '100%', marginBottom: 15}}/>
            </Link>
            <Link to="/website/zsbank">
            <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_04.png"
                 style={{width: '100%'}}/>
            </Link>
          </div>

          <div style={{float: 'left', width: '38.5%', margin: '0 20px'}}>
            <Link to="/website/xmz">
            <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_07.png"
                 style={{width: '100%'}}/>
            </Link>
              <div style={{width: '100%', marginTop: 15}}>
              <Link to="/website/gjg">
                <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_08.png"
                 style={{width: '53.5%', float: 'left'}}/>
              </Link>
              <Link to="/website/wjx">
               <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_09.png"
                 style={{width: '45%', float: 'right'}}/>
              </Link>
              </div>
          </div>

          <div style={{float: 'left', width: '18.5%'}}>
            <Link to="/website/xmz">
              <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_11.png"
                   style={{width: '100%', marginBottom: 15}}/>
            </Link>
            <Link to="/website/bx">
            <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_12.png"
                 style={{width: '100%', marginBottom: 20}}/>
            </Link>
          </div>
          <div>
            <div style={{width: '24.5%', float: 'left'}}>
              <Link to="/website/jcl">
              <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_05.png"
                   style={{width: '100%', marginBottom: 15}}/>
              </Link>
              <Link to="/website/mxg">
              <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_06.png"
                   style={{width: '100%'}}/>
              </Link>
            </div>
            <Link to="/website/afh">
            <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_10.png"
                   style={{width: '33%', margin: '0 20px', float: 'left'}}/>
            </Link>
            <Link to="/website/adly">
            <img src="http://7xsc8j.com1.z0.glb.clouddn.com/HOME/sy_13.png"
                 style={{width: '38.5%'}}/>
            </Link>
          </div>
        </div>
    );
  }
}
export { WebHome as default };
