import React from 'react';
import Nav from '../Nav';
import Head from '../Jz/Head';
import Table from '../Jz/Table';
import Ddwh from '../Jz/Ddwh';
import Gnsj from '../Jz/Gnsj';
import Jt from '../Jz/Jt';

export default class Zybs extends React.Component {

  render() {
    var headers = [
      "http://7xoblm.com1.z0.glb.clouddn.com/zybs/zhaoyuebieshu_01.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/ZYBS/zhaoyuebieshu_02.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/ZYBS/zhaoyuebieshu_03.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh_01_05.png"
    ]

    var tables = [
      "http://7xoblm.com1.z0.glb.clouddn.com/ZYBS/zhaoyuebieshu_04.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/zybs/zhaoyuebieshu_05.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/zybs/zhaoyuebieshu_06.png"
    ]

    var ddwhs = [
      "http://7xoblm.com1.z0.glb.clouddn.com/zybs/zhaoyuebieshu_07.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/ZYBS/zhaoyuebieshu_08.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/ZYBS/zhaoyuebieshu_09.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/zybs/zhaoyuebieshu_10.png"
    ]

    var gnsjs = [
      "http://7xoblm.com1.z0.glb.clouddn.com/ZYBS/zhaoyuebieshu_11.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/ZYBS/zhaoyuebieshu_12.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/zybs/zhaoyuebieshu_13.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/zybs/zhaoyuebieshu_14.jpg",
    ]

    var jts = [
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh_01_05.png",
      "http://7xoblm.com1.z0.glb.clouddn.com/zybs/zhaoyuebieshu_15.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/zybs/zhaoyuebieshu_16.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh_01_05.png",      "http://7xoblm.com1.z0.glb.clouddn.com/ZYBS/zhaoyuebieshu_17.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/ZYBS/zhaoyuebieshu_18.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh_01_05.png",      "http://7xoblm.com1.z0.glb.clouddn.com/zybs/zhaoyuebieshu_19.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/zybs/zhaoyuebieshu_20.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh_01_05.png",      "http://7xoblm.com1.z0.glb.clouddn.com/ZYBS/zhaoyuebieshu_21.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/ZYBS/zhaoyuebieshu_22.jpg",
      "http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh_01_05.png",
    ]

    return (
       <div>
         <Nav style="nav-light nav-xgt"/>
         <div className="tc"></div>
         <Head data={headers} style="xgt"/>
         <Table data={tables} style="zybs"/>
         <Ddwh data={ddwhs} style="ddwh-zybs"/>
         <Gnsj data={gnsjs} style="gnsj-zybs"/>
         <Jt data={jts} style="jt-afh"/>
       </div>
    )
  }
}
