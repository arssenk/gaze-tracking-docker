import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Try from "./components/Try";
global.cv = require('/usr/lib/node_modules/opencv4nodejs');


class App extends Component {
  render() {
    return (
      <div className="App">
        <Try/>
      </div>
    );
  }
}

export default App;
