import React from 'react';
import { Link } from 'react-router';
import Button from './Button';
import WebSite from '../WebComponents/WebSite';

class App extends React.Component {
  componentWillMount() {
    let setClientWidth = function() {
      this.setState({clientWidth: document.body.clientWidth < 700});
    }.bind(this);
    setClientWidth();
    window.onresize = setClientWidth;
  }
  
  render() {
    let app = (
      <Link to="/cp" className="home">
        <img src="http://7xoblm.com1.z0.glb.clouddn.com/images/shouye_02.png" />
        <img src="http://7xoblm.com1.z0.glb.clouddn.com/images/shouye_03.png" />
        <img src="http://7xoblm.com1.z0.glb.clouddn.com/images/shouye_05.png" />
        <img src="http://7xoblm.com1.z0.glb.clouddn.com/images/bg.jpg" />
        <Button style="home-button"/>
      </Link>
    )
    return (
      <div>
        {this.state.clientWidth ? app : <WebSite />}
      </div>
    )
  }
}

export default App
