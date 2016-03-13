import React from 'react';

export default class Jt extends React.Component {
  render() {
    let jts = this.props.data.map((jt,i) => {
  return (
    <img src={jt} key={i}/>
  )
})

    return (
      <div className={this.props.style}>
        {jts}
      </div>
    )
  }
}
