import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TabChild from './TabChild.js'

// Get the element to prepend our app to from https://www.google.com.
// This could be a specific element on a website or something more general like `document.body`.
function scrapeURL(node){
  let iSub = '<a href="';
  let eSub = " ping";
  let start = node.innerHTML.search(iSub) + iSub.length;
  let end = node.innerHTML.search(eSub) - 1;
  return node.innerHTML.substring(start, end);
}

const commentsDiv = document.getElementById('rcnt');
const app = document.createElement('div');
app.id = 'root';
if (commentsDiv) commentsDiv.prepend(app);
ReactDOM.render(<App />, document.getElementById('root'));

const divrCollections = document.querySelectorAll('div.r');
const divrURLs = []
let count = 0;
for (let item of divrCollections) {
    divrURLs.push(scrapeURL(item));
    if (item.querySelector('span') == null) {
      let buttonDiv = item.querySelector('cite.iUh30')
      buttonDiv.id = 'injLink' + count;
      let buttonDivContainer = document.createElement('div');
      buttonDivContainer.id = 'injLinkDiv' + count;
      if (buttonDiv) buttonDiv.appendChild(buttonDivContainer);
      ReactDOM.render(<TabChild link={scrapeURL(item)}/>, document.getElementById('injLinkDiv'+count))
      count +=1;
    }
    else {
      let buttonDiv = item.querySelector('span');
      buttonDiv.id = 'injLink' + count;
      let buttonDivContainer = document.createElement('div');
      buttonDivContainer.id = 'injLinkDiv' + count;
      if (buttonDiv) buttonDiv.appendChild(buttonDivContainer);
      ReactDOM.render(<TabChild link={scrapeURL(item)}/>, document.getElementById('injLinkDiv'+count))
      count +=1;}


}

console.log("=== raw =======================");
console.log(divrCollections);
console.log("=== refined ===================");
console.log(divrURLs);

/* Create a div to render the App component to.
 Set the app element's id to `root`.
 This name is the same as the element that create-react-app renders to by default
 so it will work on the development server too.
 Prepend the App to the viewport element in production if it exists on the page.
 You could also use `appendChild` depending on your needs.
 Render the App.  */

//    const commentsDiv = document.getElementById('rcnt');
//    const app = document.createElement('div');
//    app.id = 'root';
//    if (commentsDiv) commentsDiv.prepend(app);
//    ReactDOM.render(<App />, document.getElementById('root'));
