import React, { Component } from 'react';
// import './TabParent.css';

class Comment extends Component {
  constructor(props){
    super(props);
    this.state = {
      link: "",
      id: "",
      author: "Todd Howard",
      timeStamp: "",
      parent: null,
      children: null,
      score: 0,
      text: "It just works",
      classification: "meh",
      edited: false,
      collapsed: false,
    }
  }

  render() {
    return (
      <div className="comment">
        <div className="headerContainer">
          <div className="collapseBlock">
            Hidden: {this.state.collapsed}
          </div>
          <div className="authorBlock">
            Author: {this.state.author}
          </div>
          <div className="scoreBlock">
            Score: {this.state.score}
          </div>
          <div className="timeBlock">
            Time: {this.state.timeStamp}
          </div>
        </div>
        <div className="voteContainer">
          <div className="upvoteBlock">
            updoots ^
          </div>
          <div className="downvoteBlock">
            oh no V
          </div>
        </div>
        <div className="bodyBlock">
          {this.state.text}
        </div>
      </div>
    );
  }
}

export default Comment;
