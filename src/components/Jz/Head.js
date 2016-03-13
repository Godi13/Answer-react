import React from 'react';

export default class Head extends React.Component {
  render() {
    let headers = this.props.data.map((header,i) => {
      return (
        <li key={i}><img src={header} /></li>
      )
    })

    return (
      <ul className={this.props.style}>
        {headers}
      </ul>
    )
  }
}
