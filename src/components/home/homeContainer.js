import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';

import { userQuery } from '../../gql/user';

import Home from './home';

class HomeContainer extends Component {
    render() {
        if (this.props.data.loading) {
            return null
        }
        return <Home {...this.props} data={this.props.data} />
    }
}

const userQueryWithGQL = graphql(userQuery, {
    options: (ownProps) => {
        return {
            variables: {
                email: 'creedjm@gmail.com'
            }
        }
    }
})

export default withRouter(userQueryWithGQL(HomeContainer));
