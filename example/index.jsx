import React from 'react';

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div>
        hello
      </div>);
  }
}

App.displayName = 'App';


export default App;
