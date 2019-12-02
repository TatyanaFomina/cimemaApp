import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';


import './assets/style/index.css';
import App from './components/containers/App';
import {store, history} from './store/index.js';


ReactDOM.render(<Provider store={store}><Router history={history}><App /></Router></Provider>, document.getElementById('root'));


