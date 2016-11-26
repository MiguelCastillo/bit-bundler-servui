import React from 'react';
import ReactDOM from 'react-dom';
import DOMReady from './utils/DOMReady';

DOMReady(() => {
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('app')
  );
});
