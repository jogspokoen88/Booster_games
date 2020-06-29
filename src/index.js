import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import App from './App';

const client = new ApolloClient({uri: "https://booster.games/api/"})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);


