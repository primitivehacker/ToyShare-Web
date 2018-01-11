
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Container,
    Header,
    Segment,
    Button
} from 'semantic-ui-react';

class Home extends Component {
    goTo(route) {
  		this.props.history.push(`/${route}`)
  	}

    render() {
        return (
            <Container>
                <Segment>
                    <Header>
                        Hello {this.props.data.user ? this.props.data.user.first_name : 'friend' }!

                    </Header>

                </Segment>
                <Button basic color='pink' onClick={this.goTo.bind(this, 'toys/create')}>Share Your Toy</Button>
                <Button basic color='black' onClick={this.goTo.bind(this, 'toys/create')}>Borrow a Toy</Button>
            </Container>

        )
    }
}

export default withRouter(Home);
