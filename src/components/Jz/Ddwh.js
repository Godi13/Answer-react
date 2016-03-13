import React from 'react';

export default class Ddwh extends React.Component {
  render() {
    let ddwhs = this.props.data.map((ddwh,i) => {
  return (
    <img src={ddwh} key={i}/>
  )
})


    return (
      <div className={this.props.style}>
        {ddwhs}
      </div>
    )
  }
}
