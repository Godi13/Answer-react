import React from 'react';
import Nav from './Nav';

export default class Contact extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: '#222'}}>
      <Nav style="nav-dark nav-contact"/>
      <iframe height="250" width="100%" src="http://player.youku.com/embed/XMTQ2ODM2Mjk4MA==" frameBorder="0" allowFullScreen style={{border: 0, marginTop: 100}}></iframe>


      <div style={{padding: 20,paddingBottom: 0,fontSize: 18, color: '#aaa'}}><i style={{fontSize: 22, color: '#eee'}}>达岸(北京)数字科技有限责任公司</i>
      <p>是一家以3D数字视觉技术为核心，以创意文化产业为背景的综合服务型企业。</p>
      <p>公司专注于三维建筑动画、产品包装与宣传、展览展示等行业，拥有顶尖的画面表现技术，旨在为你创造出观所未观的新“视界”。我们热爱三维动画，钻研细节，痴迷于影像的魔法。 我们充满创意，挖掘品牌更深层次的内涵。我们追求卓越，更重视有力的执行，我们是一支年轻而富有梦想的团队。</p>
      </div>
      <p style={{padding: '20px 20px 15px', margin: 0, fontSize: 35, color: '#eee',  textAlign: 'center'}}>主营业务</p>
      <div style={{color: '#aaa', textAlign: 'center', fontSize: 20}}>
        <p style={{margin: 0}}>产品包装</p>
        <p style={{margin: 0}}>建筑动画</p>
        <p style={{margin: 0}}>建筑效果图</p>
        <p style={{margin: 0}}>展览展示</p>
      </div>

      <p style={{padding: '35px 20px 15px', margin: 0, fontSize: 35, color: '#eee',  textAlign: 'center'}}>主要作品</p>

      <p style={{color: '#aaa', textAlign: 'center', fontSize: 20,margin: 0}}>北京城建《海云家园》<br />
      万科集团《金域蓝湾》<br />
      合肥电视台《古井贡酒》<br />
      合肥电视台《凡帝罗法式》冰箱<br />
      《黄山无极雪》矿泉水<br />
      《南昌九龙大道》<br />
      墨西哥《CNMA》商业中心<br />
      澳大利亚《阿马尔菲》别墅<br />
      阿富汗文化创意中心<br />
      西门子榨汁机<br />
      招商银行大楼  </p>
      <p style={{padding: '35px 20px 15px', margin: 0, fontSize: 35, color: '#eee',  textAlign: 'center'}}>联系方式</p>
      <p style={{color: '#aaa', textAlign: 'center', fontSize: 17,margin: 0}}>
      北京市海淀区八里庄路正源定慧福里1509 <br/>
      邮编：100142<br />
      E-MALL: 253747999@qq.com</p>
      
      <p style={{margin: 0, color: '#777', padding: '50px 0 10px',fontSize: 10,textAlign: 'center'}}>京ICP备15061862号 达岸(北京)数字科技有限公司</p>
      </div>
    )
  }
}
