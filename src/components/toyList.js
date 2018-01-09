import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import { toyQuery, toyRemove } from '../gql/toys';
import { Button, List, Image, Icon } from 'semantic-ui-react'


class ToyList extends Component {
  goTo(route) {
		this.props.history.push(`/${route}`)
	}

  onToyRemove(id) {
    this.props.mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  }

  renderToys() {
    return this.props.data.toys.map(toy => {
      return (

              <List selection verticalAlign='middle' key={toy.id}>
                <List.Item>
                  <Image avatar src='/assets/images/avatar/small/helen.jpg' />
                  <List.Content>
                    <List.Header>{toy.id}</List.Header>
                    <List.Header>{toy.category}</List.Header>
                    <List.Header>{toy.subCategory}</List.Header>
                    <List.Header>{toy.price}</List.Header>
                    <List.Header>{toy.condition}</List.Header>
                    <List.Header>{toy.location}</List.Header>
                  </List.Content>
                </List.Item>
                <Icon name='delete' onClick={() => this.onToyRemove(toy.id)}/>
              </List>


      )
    });
  }

  render() {
    if (this.props.data.loading) { return <div>Loading...</div>; }



    return (
          <div>
            <ul>
              {this.renderToys()}
            </ul>

            <Button basic color='pink' content='Add Toy' onClick={this.goTo.bind(this, 'toys/create')}/>

          </div>


    );
  }
}

export default graphql(toyRemove)(
  graphql(toyQuery)(ToyList)
);
