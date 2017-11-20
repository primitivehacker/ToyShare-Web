import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { makeMainRoutes } from './routes';
import { ApolloProvider } from 'react-apollo';
import { client } from './apollo';

ReactDOM.render(
    (
        <ApolloProvider client={client}>
            {makeMainRoutes()}
        </ApolloProvider>
    ), document.getElementById('root'));
