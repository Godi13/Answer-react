import React from 'react';
import { Link } from 'react-router';

class Zs extends React.Component {
  render() {
    let small = this.props.data.map((sm,i) => {
      return (
        <li key={i}><img src={sm} /></li>
      )
    })

  return (
    <div>
      <Link to={this.props.link}>
        <img src={this.props.src} />
        <ul className="xtp">
          {small}
        </ul>
      </Link>
      <img src="http://7xoblm.com1.z0.glb.clouddn.com/images/cpdh_01_05.png" className="huangdian"/>
    </div>
    )
  }
}

export default Zs
