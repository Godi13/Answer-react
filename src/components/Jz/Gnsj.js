import React from 'react';

export default class Gnsj extends React.Component {
  render() {
    let gnsjs = this.props.data.map((gnsj,i) => {
  return (
    <img src={gnsj} key={i}/>
  )
})

    return (
      <div className={this.props.style}>
        {gnsjs}
      </div>
    )
  }
}
