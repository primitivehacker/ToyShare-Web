import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const apiRoot = process.env.REACT_APP_API_ROOT || 'http://localhost:8080'

let uri = `${apiRoot}/graphql`;

export const client = new ApolloClient({
    link: createHttpLink({ uri }),
    cache: new InMemoryCache(),
});
