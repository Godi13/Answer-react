import React from 'react';
import Nav from '../Nav';

export default class Air extends React.Component {

  render() {

    var air = [
      'http://7xoblm.com1.z0.glb.clouddn.com/images/bg.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/ZZJ/kongqijinghuaqi_01.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/ZZJ/kongqijinghuaqi_02.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/ZZJ/kongqijinghuaqi_03.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/ZZJ/kongqijinghuaqi_04.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/ZZJ/kongqijinghuaqi_05.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/ZZJ/kongqijinghuaqi_06.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/ZZJ/kongqijinghuaqi_07.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/ZZJ/kongqijinghuaqi_08.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/ZZJ/kongqijinghuaqi_09.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/ZZJ/kongqijinghuaqi_10.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/ZZJ/kongqijinghuaqi_11.jpg',
    ]

    let airs = air.map((air,i) => {
      return (
        <img src={air} key={i} />
      )
    })

    return (
      <div className="Bx">
        <Nav style="cp"/>
        <iframe height="250" width="100%" src="http://player.youku.com/embed/XMTQ2MzkzOTcwMA==" frameBorder="0" allowFullScreen style={{position: 'absolute', top: 80, border: 0}}></iframe>
        { airs }
      </div>
    )
  }
}
