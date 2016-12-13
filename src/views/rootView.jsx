import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducers from '../reducers/root';

const AppComponent = connect(state => state)(App);

var store = createStore(rootReducers, {
  dependencies: [{
    name: "test",
    version: "1.1.1"
  }]
});

export default function () {
  ReactDOM.render(
    <Provider store={ store }><AppComponent /></Provider>,
    document.getElementById('root')
  );
};
