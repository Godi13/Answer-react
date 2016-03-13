import React from 'react';
import Nav from '../Nav';
import { Link } from 'react-router';
import Button from '../Button';

export default class Jz extends React.Component {

render() {
  var hyjy = [
    "http://7xoblm.com1.z0.glb.clouddn.com/jzdh/jianzhudonghua_01_01.jpg",
    "http://7xoblm.com1.z0.glb.clouddn.com/jzdh/jianzhudonghua_01_02.jpg",
    "http://7xoblm.com1.z0.glb.clouddn.com/xg/jianzhudonghua_01_04.png",
  ]

  var jylw = [
    "http://7xoblm.com1.z0.glb.clouddn.com/jzdh/jianzhudonghua_02_01.jpg",
    "http://7xoblm.com1.z0.glb.clouddn.com/jzdh/jianzhudonghua_02_02.jpg",
    "http://7xoblm.com1.z0.glb.clouddn.com/jzdh/jianzhudonghua_02_04.png",
  ]

  let hyjys = hyjy.map((hyjy,i) => {
    return (
      <li key={i}><Link to="jz/hyjy"><img src={hyjy} /></Link></li>
    )
  })

  let jylws = jylw.map((jylw,i) => {
    return (
      <li key={i}><Link to="jz/jylw"><img src={jylw} /></Link></li>
    )
  })

    return (
      <div>
        <Nav style="nav-light nav-jz"/>
        <ul className="jz">
          {hyjys}
          <Link to="jz/hyjy">
            <Button style="cp-button"/>
          </Link>
          {jylws}
          <Link to="jz/jylw">
            <Button style="cp-button"/>
          </Link>
        </ul>
      </div>
    )
  }
}
