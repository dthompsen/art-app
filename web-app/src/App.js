// Copyright 2021 Dave Thompsen. Subject to the MIT license.
// Adapted from create-react-app material-ui template.
import React, { Component } from 'react'
import App from 'base-shell/lib'
import MUIConfig from 'material-ui-shell/lib'
import merge from 'base-shell/lib/utils/config'
import _config from './config'
import { ApolloProvider,  ApolloClient,  createHttpLink,  InMemoryCache } from '@apollo/client';

const GRAPHQL_URL = 'http://localhost:5000/';
const config = merge(MUIConfig, _config)

const client = new ApolloClient({
  link: createHttpLink({ uri: GRAPHQL_URL }),
  cache: new InMemoryCache(),
});

export default class Demo extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <App config={config} />
      </ApolloProvider>
    )
  }
}
