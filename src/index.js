import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';
import './index.css';


ReactDOM.render(
  <HelloWorld text_up="Lots of fun!" teacher_aamir="Aaamir Pinger" teacher_mohsin="Mohsin" teacher_ameen="Ameen" teacher_bashir="Bashir Aziz"/>,
  document.querySelector('#root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
