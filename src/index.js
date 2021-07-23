import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
// import Autoplay from './test';


ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <Autoplay/> */}
  </Provider>,
  document.getElementById('root')
);

