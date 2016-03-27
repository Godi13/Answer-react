import React from 'react';
import Nav from '../Nav';
import Head from './Head';
import Table from './Table';
import Ddwh from './Ddwh';
import Gnsj from './Gnsj';
import Jt from './Jt';

export default class Jylw extends React.Component {

  render() {
    var headers = [
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_02.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_03.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_04.png",
    ]

    var tables = [
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_05.jpg?imageView2/1/w/650/h/590",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_06.jpg?imageView2/1/w/310/h/240",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_07.jpg"
    ]

    var ddwhs = [
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_08.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_09.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_10.png?imageView2/1/w/690/h/350",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_11.jpg?imageView2/1/w/980/h/180"
    ]

    var gnsjs = [
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_12.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_13.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_14.jpg?imageView2/1/w/1000/h/390"
    ]

    var jts = [
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_15.jpg?imageView2/1/w/1000/h/470",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_16.jpg?imageView2/1/w/1000/h/470",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_17.jpg?imageView2/1/w/1000/h/470",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_18.jpg?imageView2/1/w/1000/h/470",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_19.jpg?imageView2/1/w/1000/h/470",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_20.jpg?imageView2/1/w/1000/h/470",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_21.jpg?imageView2/1/w/1000/h/470",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_22.jpg?imageView2/1/w/1000/h/470",
      "http://7xoblm.com1.z0.glb.clouddn.com/jylw/jinyulanwan_23.jpg?imageView2/1/w/1000/h/470",
    ]

    return (
       <div className="bj">
         <Nav style="nav-jz-font"/>
         <div className="tc"></div>
         <iframe height="250" width="100%" src="http://player.youku.com/embed/XMTQ2Mzk0MjAzMg==" frameborder="0" allowfullscreen style={{border: 0, marginBottom: 30}}></iframe>
         <Head data={headers} style="jzdh"/>
         <Table data={tables} style="jylw"/>
         <Ddwh data={ddwhs} style="ddwh"/>
         <Gnsj data={gnsjs} style="gnsj"/>
         <Jt data={jts} style="jt"/>
       </div>
    )
  }
}
