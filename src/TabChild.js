import React, { Component } from 'react';
import './App.css';
import tabImg from './assets/tab.png';

class TabChild extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'isOn' : false,
      'link' : props.link}
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(prevState => ({
        isOn: !prevState.isOn
      }));
      alert(this.state.isOn +'\n' +this.state.link)
    }
  render() {
    return (
      <div className="TabChild">
        <img src={tabImg} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default TabChild;
