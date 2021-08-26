import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Login from './components/authentication/Login';
import configStore from './store/configStore.js';
import { Provider } from 'react-redux';

const store = configStore()

console.log(store.getState())

store.subscribe(() => {
  console.log('state get updated', store.getState())
})


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


