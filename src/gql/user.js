import gql from 'graphql-tag';

export const userQuery = gql`
    query user(
        $email: String
    ){
        user(
            email: $email
        ) {
            id
            first_name
            last_name
            email
        }
    } 
`;

export const userUpdate = gql`
    mutation userUpdate(
        $id: ID,
        $email: String!
    ){
        userUpdate(
            id: $id
            email: $email
        )
        {
            id
        }
    }
`;