import React, { Component } from 'react';
import './App.css';
import Comment from './comment.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      links: []
    }
  }
  for (let i = 0; i<this.props.links.length; i++){
    <Comment link={this.props.links[i]} id={this.props.link[i]+i}/>
  }
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
