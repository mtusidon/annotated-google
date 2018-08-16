import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TabChild from './TabChild.js'

// Parse for URL from single search result
function scrapeURL(node){
  let iSub = '<a href="';
  let eSub = " ping";
  let start = node.innerHTML.search(iSub) + iSub.length;
  let end = node.innerHTML.search(eSub) - 1;
  return node.innerHTML.substring(start, end);
}
// Render single action arrow
function createTabDiv (div, node){
  div.id = 'injLink' + count;
  let divContainer = document.createElement('div');
  divContainer.id = 'injLinkDiv' + count;
  if (div) div.appendChild(divContainer);
  ReactDOM.render(<TabChild link={scrapeURL(node)}/>, document.getElementById('injLinkDiv'+count))
}

// Render Arrows for each displayed Link
const divrCollections = document.querySelectorAll('div.r');
let count = 0;
const linksArr = [];
for (let item of divrCollections) {
    // If link does not have cache/similar action arrow
    if (item.querySelector('span') == null) {
      let buttonDiv = item.querySelector('cite.iUh30')
      createTabDiv(buttonDiv, item);
      links.push(scrapeURL(item.innerHTML));
      count +=1;
    }
    else {
      let buttonDiv = item.querySelector('span');
      createTabDiv(buttonDiv, item);
      links.push(scrapeURL(item.innerHTML));
      count +=1;
    }
}
// Render Comments Div
const commentsDiv = document.getElementById('rcnt');
const app = document.createElement('div');
app.id = 'root';
if (commentsDiv) commentsDiv.prepend(app);
ReactDOM.render(<App links={linksArr} />, document.getElementById('root'));
