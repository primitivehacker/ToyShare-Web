import gql from 'graphql-tag';

export default gql`
  query ToyQuery($id: ID!) {
    toy(id: $id) {
      id
      category
    }
  }

`;
