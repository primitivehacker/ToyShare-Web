import gql from 'graphql-tag';

export const toyQuery = gql`
  {
    toys {
      id
      owner
      category
      subCategory
      price
      condition
      location
    }
  }
`;

export const toyMutation = gql`
mutation CreateToy(
  $category: String,
  $subCategory: String,
  $price: Float,
  $condition: String,
  $location: String
){
  toyCreate(
    category: $category,
    subCategory: $subCategory,
    price: $price,
    condition: $condition,
    location: $location
  ){
    id
    category
    subCategory
    price
    condition
    location
  }
}
`;

export const toyRemove = gql`
  mutation DeleteToy($id: ID!) {
    toyRemove(id: $id) {
      id
    }
  }

`;
