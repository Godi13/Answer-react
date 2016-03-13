import React from 'react';

export default class Table extends React.Component {
  render() {
      let tables = this.props.data.map((table,i) => {
        return (
          <img src={table} key={i}/>
        )
      })

    return (
      <div className={this.props.style}>
        {tables}
      </div>
    )
  }
}
