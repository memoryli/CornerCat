require('normalize.css/normalize.css');
require('styles/Reset.css')
// require('styles/App.css');


import React from 'react';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
          Hello
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
