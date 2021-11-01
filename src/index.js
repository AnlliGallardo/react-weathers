import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
import './styles/weathersApp.css'
import {Provider} from 'react-redux';
import { store } from './store/store';
import {AplicationWeathers} from './AplicationWeathers'




ReactDOM.render(
  <Provider store={store}>
        <AplicationWeathers />
    </Provider>,
  document.getElementById('root')
);

