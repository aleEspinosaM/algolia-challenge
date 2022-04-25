import React from 'react';
import ReactDOM from 'react-dom';
import algoliasearch from 'algoliasearch';
import './index.css';
import App from './App.jsx';
import { Provider } from './context';

const searchClient = algoliasearch(
  process.env.REACT_APP_ID,
  process.env.REACT_APP_KEY
);

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App searchClient={searchClient} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
