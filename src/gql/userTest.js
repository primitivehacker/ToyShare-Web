import gql from 'graphql-tag';

export const userQuery = gql`
{
  users {
    id
    last_name
    first_name

  }
}
`;
