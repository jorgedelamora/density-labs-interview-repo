import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStoreFunction from './redux/store';

import './index.css';
import App from './App';

const store = createStoreFunction();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);