import React, { Component } from 'react';
import './App.css';
import {
	Container,
  	Menu
} from 'semantic-ui-react';

class App extends Component {
	goTo(route) {
		this.props.history.push(`/${route}`)
	}

  	render() {
		return (
			<div className="App">
				<Menu fluid inverted>
					<Container>
						<Menu.Item onClick={this.goTo.bind(this, '')}>
							ToyShare
						</Menu.Item>

						<Menu.Item onClick={this.goTo.bind(this, 'users/list')}>
							Users
						</Menu.Item>

						<Menu.Item onClick={this.goTo.bind(this, 'toys/list')}>
							Toys
						</Menu.Item>

					</Container>
				</Menu>
			</div>
		);
  	}
}

export default App;
