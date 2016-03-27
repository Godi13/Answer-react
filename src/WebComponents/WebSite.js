import React from 'react';
import WebNavBar from './WebNavBar';
import WebHome from './WebHome';

class WebSite extends React.Component {
  render() {
    return (
      <div>
        <WebNavBar />
        {this.props.children || <WebHome />}
      </div>
    );
  }
}

export { WebSite as default };
