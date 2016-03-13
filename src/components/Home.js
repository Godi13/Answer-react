import React from 'react';
import { Link } from 'react-router';
import Button from './Button';

class Home extends React.Component {
  render() {
    return (
      <Link to="/cp" className="home">
        <img src="http://7xoblm.com1.z0.glb.clouddn.com/images/shouye_02.png" />
        <img src="http://7xoblm.com1.z0.glb.clouddn.com/images/shouye_03.png" />
        <img src="http://7xoblm.com1.z0.glb.clouddn.com/images/shouye_05.png" />
        <img src="http://7xoblm.com1.z0.glb.clouddn.com/images/bg.jpg" />
        <Button style="home-button"/>
      </Link>
    )
  }
}

export default Home
