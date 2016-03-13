import React from 'react';
import Nav from '../Nav';

export default class Bx extends React.Component {

  render() {

    var bx = [
      "http://7xoblm.com1.z0.glb.clouddn.com/images/bg.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_01.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_02.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_03.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_04.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_05.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_06.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_07.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_08.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_09.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_10.jpg",
    ]

    let bxs = bx.map((bx,i) => {
      return (
        <img src={bx} key={i} />
      )
    })

    return (
      <div className="Bx">
        <Nav style="cp"/>
        <iframe src="http://likeyou.x9.fjjsp01.com/youku/videoyk.jsp?token=v&width=620&height=400&auto=no&id=XMTQ5MTg1OTAzNg" width="100%" height="250" scrolling="no" style={{border: 0,position: 'absolute', top: 80, margin: 0, padding: 0}}></iframe>
        { bxs }
      </div>
    )
  }
}
