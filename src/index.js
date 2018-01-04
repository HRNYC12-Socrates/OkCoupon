import React from 'react';
import ReactDOM from 'react-dom';
import Router from './route.js'

console.log('Hello World!');
 
ReactDOM.render(<Router />, document.getElementById('mount'));

// document.addEventListener('DOMContentLoaded', function() {
//   ReactDOM.render(
//     React.createElement(Navigation),
//     document.getElementById('mount')
//   );
// });;