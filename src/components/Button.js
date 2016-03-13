import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <div className="button-position">
        <div className={this.props.style}>
          <button className='pulse-button'>Click</button>
        </div>
      </div>
    )
  }
}
