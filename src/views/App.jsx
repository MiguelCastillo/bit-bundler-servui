import React from 'react';
import Dependency from './Dependency';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <div id="app-header">
          bundler-service
        </div>
        <div id="app-body">
          <h2 className="dependencies">Dependencies</h2>
          { this.props.dependencies.map(dependency => <Dependency key={ dependency.name } { ...dependency } />) }
        </div>
        <div id="app-footer">
          Miguel Castillo
        </div>
      </div>
    );
  }
}

export default App;
