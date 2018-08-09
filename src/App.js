import React, { Component } from 'react';
import './App.css';
import Comment from './comment.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Comment />
        </p>
      </div>
    );
  }
}

export default App;
