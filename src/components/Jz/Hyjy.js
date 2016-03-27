import React from 'react';
import Nav from '../Nav';
import Head from './Head';
import Table from './Table';
import Ddwh from './Ddwh';
import Gnsj from './Gnsj';
import Jt from './Jt';

export default class Hyjy extends React.Component {

  render() {
    var headers = [
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_01.png',
      'http://7xoblm.com1.z0.glb.clouddn.com/xg/haiyunjiayuan_03.png',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_04.png'
    ]

    var tables = [
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_05.jpg',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_06.jpg?imageView2/1/w/250/h/250',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_07.jpg?imageView2/1/w/300/h/300'
    ]

    var ddwhs = [
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_08.jpg?imageView2/1/w/700/h/340',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_09.png',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_10.png',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_11.jpg'
    ]

    var gnsjs = [
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_12.png',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_13.jpg?imageView2/1/w/750/h/320',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_14.jpg'
    ]

    var jts = [
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_15.jpg?imageView2/1/w/970/h/330',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_16.jpg?imageView2/1/w/970/h/330',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_17.jpg?imageView2/1/w/970/h/330',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_18.jpg?imageView2/1/w/970/h/330',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_19.jpg?imageView2/1/w/970/h/330',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_20.jpg?imageView2/1/w/970/h/330',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_21.jpg?imageView2/1/w/970/h/330',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_22.jpg?imageView2/1/w/970/h/330',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_23.jpg?imageView2/1/w/970/h/330',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_24.jpg?imageView2/1/w/970/h/330',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_25.jpg?imageView2/1/w/970/h/330',
      'http://7xoblm.com1.z0.glb.clouddn.com/hyjy/haiyunjiayuan_26.jpg?imageView2/1/w/970/h/330',
    ]

    return (
       <div className="bj">
         <Nav style="nav-jz-font"/>
         <div className="tc"></div>
         <iframe height="250" width="100%" src="http://player.youku.com/embed/XMTQ5MTc2ODQ1Ng==" frameborder="0" allowfullscreen style={{border: 0, marginBottom: 30}}></iframe>
         <Head data={headers} style="jzdh"/>
         <Table data={tables} style="hyjy"/>
         <Ddwh data={ddwhs} style="ddwh"/>
         <Gnsj data={gnsjs} style="gnsj"/>
         <Jt data={jts} style="jt"/>
       </div>
    )
  }
}
