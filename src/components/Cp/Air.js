import React from 'react';
import Nav from '../Nav';

export default class Air extends React.Component {

  render() {

    var air = [
      "http://7xoblm.com1.z0.glb.clouddn.com/air/kongqijinghuaqi_01.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/air/kongqijinghuaqi_02.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/air/kongqijinghuaqi_03.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/air/kongqijinghuaqi_04.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/air/kongqijinghuaqi_05.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/air/kongqijinghuaqi_06.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/air/kongqijinghuaqi_07.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/air/kongqijinghuaqi_08.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/air/kongqijinghuaqi_09.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/air/kongqijinghuaqi_10.jpg",
    ]

    let airs = air.map((air,i) => {
      return (
        <img src={air} key={i} />
      )
    })

    return (
      <div>
        <Nav style="nav-light cp-light"/>
        <div className="white"></div>
        { airs }
      </div>
    )
  }
}
