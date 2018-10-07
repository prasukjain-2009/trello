import React, { Component } from 'react';
import './css/App.css';
import NavBar from "./jsx/navBar/navBar.jsx";
import MainBody from "./jsx/mainBody.jsx";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedBoard: 0
		}
	}

	render() {
		return (
			<div className="container App ">
				<NavBar selectedBoard={(selectedBoard) => this.setState({ selectedBoard: selectedBoard })} />
				<MainBody board={this.state.selectedBoard} />
			</div>
		);
	}
}


export default App;
