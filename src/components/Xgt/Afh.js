import React from 'react';
import Nav from '../Nav';
import Head from '../Jz/Head';
import Table from '../Jz/Table';
import Ddwh from '../Jz/Ddwh';
import Gnsj from '../Jz/Gnsj';
import Jt from '../Jz/Jt';

export default class Afh extends React.Component {

  render() {
    var headers = [
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_01.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_02.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_03.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh_01_05.png"
    ]

    var tables = [
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_04.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_05.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_06.jpg"
    ]

    var ddwhs = [
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_07.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_08.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_09.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_10.jpg"
    ]

    var gnsjs = [
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_11.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_12.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_13.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_14.jpg",
    ]

    var jts = [
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh_01_05.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_15.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_16.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh_01_05.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_17.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_18.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh_01_05.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/afh/afuhan_19.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh_01_05.png",
    ]

    return (
       <div>
         <Nav style="nav-light nav-xgt"/>
         <div className="tc"></div>
         <Head data={headers} style="xgt"/>
         <Table data={tables} style="afh"/>
         <Ddwh data={ddwhs} style="ddwh-afh"/>
         <Gnsj data={gnsjs} style="gnsj-afh"/>
         <Jt data={jts} style="jt-afh"/>
       </div>
    )
  }
}
