/* eslint-disable no-console */
/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-11 21:47:56
 * @Last Modified by: sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 17:19:19
 */

import React from 'react';
import ReactDOM from 'react-dom';
// reset css
import 'sanitize.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
// config theme
import theme from './theme';
import store from './store';
import App from './src/App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
);

// this is code register manifest
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
