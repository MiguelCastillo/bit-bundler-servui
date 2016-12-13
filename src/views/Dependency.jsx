import React from 'react';

export default class Dependency extends React.Component {
  render() {
    return (
      <div className="dependency">
        <span className="name">{ this.props.name }</span>&nbsp;<span className="version">{ this.props.version }</span>
      </div>
    )
  }
}
