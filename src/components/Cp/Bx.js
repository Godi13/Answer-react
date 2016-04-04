import React from 'react';
import Nav from '../Nav';

export default class Bx extends React.Component {

  render() {

    var bx = [
      'http://7xoblm.com1.z0.glb.clouddn.com/images/bg.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_01.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_02.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_03.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_04.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_05.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_06.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_07.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_08.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_09.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/cpdh/meidibingxiang_10.jpg',
    ]

    let bxs = bx.map((bx,i) => {
      return (
        <img src={bx} key={i} />
      )
    })

    return (
      <div className="Bx">
        <Nav style="cp"/>
        <iframe height="250" width="100%" src="http://player.youku.com/embed/XMTQ5MTg1OTAzNg==" frameBorder="0" allowFullscreen style={{position: 'absolute', top: 80, border: 0}}></iframe>
        { bxs }
      </div>
    )
  }
}
