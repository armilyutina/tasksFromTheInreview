import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const input = {
	' ': [5],
	'd': [10],
	'e': [1],
	'H': [0],
	'l': [2,3,9],
	'o': [4,7],
	'r': [8],
	'w': [6],
};

const empty = {}


ReactDOM.render(
  <React.StrictMode>
    <Fragment>
    	<App input = {input} />
    	<App input = {empty} />
  	</Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
