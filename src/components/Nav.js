import React from 'react';
import { Link } from 'react-router';


const styles = {}


class Nav extends React.Component {

  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <img src="http://7xoblm.com1.z0.glb.clouddn.com/images/shouye_02.png" />
          </Link>
        </header>
        <nav className={this.props.style}>
          <Link to="/cp"><div className="dq">产品动画</div></Link>
          <Link to="/jz"><div className="dq">建筑动画</div></Link>
          <Link to="/xgt"><div className="dq">建筑效果图</div></Link>
          <Link to="/contact"><div className="dq">联系我们</div></Link>
        </nav>
      </div>
    )
  }
}

export { Nav as default }
