import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { toyMutation } from '../gql/toys';
import { toyQuery } from '../gql/toys';
import { Form } from 'semantic-ui-react'


class ToyCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { category: '' };
    this.state = { subCategory: '' };
    this.state = { price: 0.0 };
    this.state = { condition: '' };
    this.state = { location: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        category: this.state.category,
        subCategory: this.state.subCategory,
        price: this.state.price,
        condition: this.state.condition,
        location: this.state.location

      },
      refetchQueries: [{ query: toyQuery }]
    }).then(() => this.props.history.push(`/toys/list`))
  }




  render() {
    return (
      <div>
        <h3>Create a New Toy</h3>
        <Form onSubmit={this.onSubmit.bind(this)}>
          <Form.Field>
            <label>Category</label>
            <input
              placeholder='Winter, Summer, Motorvehicle, etc..'
              onChange={event => this.setState({ category: event.target.value })}
              value={this.state.category}
            />
          </Form.Field>
        </Form>
        <Form onSubmit={this.onSubmit.bind(this)}>
          <Form.Field>
            <label>Subcategory</label>
            <input
              placeholder='Snowboard, Skateboard, Snowmobile etc..'
              onChange={event => this.setState({ subCategory: event.target.value })}
              value={this.state.subCategory}
            />
          </Form.Field>
        </Form>
        <Form onSubmit={this.onSubmit.bind(this)}>
          <Form.Field>
            <label>Price</label>
            <input
              onChange={event => this.setState({ price: event.target.value })}
              value={this.state.price}
            />
          </Form.Field>
        </Form>
        <Form onSubmit={this.onSubmit.bind(this)}>
          <Form.Field>
            <label>Condition</label>
            <input
              placeholder='excellent, good, standard, poor'
              onChange={event => this.setState({ condition: event.target.value })}
              value={this.state.condition}
            />
          </Form.Field>
        </Form>
        <Form onSubmit={this.onSubmit.bind(this)}>
          <Form.Field>
            <label>Toy location</label>
            <input
              onChange={event => this.setState({ location: event.target.value })}
              value={this.state.location}
            />
          </Form.Field>
        </Form>

      </div>
    );
  }
}

export default graphql(toyMutation)(ToyCreate);
