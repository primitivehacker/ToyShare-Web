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
							Wyroo
						</Menu.Item>
					
					</Container>
				</Menu>
			</div>
		);
  	}
}

export default App;
