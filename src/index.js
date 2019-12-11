import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import App from './App';
import RelayEnvironment from './RelayEnvironment';

// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.getElementById('root')).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <App />
  </RelayEnvironmentProvider>,
);
