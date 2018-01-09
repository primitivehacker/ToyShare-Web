import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import { userQuery } from '../gql/userTest';
import { List } from 'semantic-ui-react'


class UserList extends Component {
  renderUsers() {
    return this.props.data.users.map(user => {
      return (
        <List selection verticalAlign='middle' key={user.id}>
          <List.Header>
            {user.id}
          </List.Header>
          <List.Item>
            {user.first_name}
          </List.Item>
          <List.Item>
            user.toys
          </List.Item>
        </List>
      )
    });
  }

  render() {
    if (this.props.data.loading) { return <div>Loading...</div>; }

    return (
      <ul>
        {this.renderUsers()}
      </ul>
    );
  }
}

export default graphql(userQuery)(UserList);
