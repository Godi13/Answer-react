import React from 'react';
import Nav from '../Nav';
import { Link } from 'react-router';
import Button from '../Button';

export default class Xgt extends React.Component {

render() {
  var afh = [
    "http://7xoblm.com1.z0.glb.clouddn.com/xgtxiaoguotu_01_01.jpg",
    "http://7xoblm.com1.z0.glb.clouddn.com/xgtxiaoguotu_01_02.jpg",
    "http://7xoblm.com1.z0.glb.clouddn.com/XGT/xiaoguotu_01_04.png",
  ]

  var zybs = [
    "http://7xoblm.com1.z0.glb.clouddn.com/xgtxiaoguotu_02_01.jpg",
    "http://7xoblm.com1.z0.glb.clouddn.com/XGT/xiaoguotu_02_02.jpg",
    "http://7xoblm.com1.z0.glb.clouddn.com/XGT/xiaoguotu_02_04.png"
  ]

  let afhs = afh.map((afh,i) => {
    return (
      <li key={i}><Link to="xgt/afh"><img src={afh} /></Link></li>
    )
  })

  let zybss = zybs.map((zybs,i) => {
    return (
      <li key={i}><Link to="xgt/zybs"><img src={zybs} /></Link></li>
    )
  })

    return (
      <div>
        <Nav style="nav-light nav-xgt"/>
        <ul className="jz">
          {afhs}
          <Link to="xgt/afh"><Button style="cp-button"/></Link>
          {zybss}
          <Link to="xgt/zybs"><Button style="cp-button"/></Link>
        </ul>
      </div>
    )
  }
}
