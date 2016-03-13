import React from 'react';
import { Link } from 'react-router';
import Nav from '../Nav';
import Zs from './Zs';
import Button from '../Button';

class Cp extends React.Component {
  render() {
    var bx = [
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh/BX1.jpg?imageView2/1/w/500/h/300",
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh/BX2.jpg?imageView2/1/w/500/h/300",
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh/BX3.jpg?imageView2/1/w/500/h/300"
    ]

    var air = [
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh/KT1.jpg?imageView2/1/w/500/h/300",
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh/KT2.jpg?imageView2/1/w/500/h/300",
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh/KT3.jpg?imageView2/1/w/500/h/300"
    ]

    return (
      <div className="show">
        <Nav style="cp"/>
        <img src="http://7xoblm.com1.z0.glb.clouddn.com/images/bg.jpg" className="ht" />
        <Zs data={bx} src="http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh_01_01.jpg" link="cp/bx"/>
        <Link to="cp/bx">
          <Button style="cp-button"/>
        </Link>
        <Zs data={air} src="http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh_02_01.jpg" link="cp/air"/>
        <Link to="cp/air">
          <Button style="cp-button"/>
        </Link>
      </div>
    )
  }
}

export default Cp
