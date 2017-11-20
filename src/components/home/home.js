import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Container,
    Header,
    Segment
} from 'semantic-ui-react';

class Home extends Component {

    render() {
        return (
            <Container>
                <Segment>
                    <Header>
                        Hello {this.props.data.user ? this.props.data.user.first_name : 'friend' }!
                    </Header>
                </Segment>
            </Container>
        )
    }
}

export default withRouter(Home);
