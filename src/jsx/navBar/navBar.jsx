import React, {Component} from 'react';
import logo from "../../img/trello-logo-white.svg";

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedBoard: 0
		};
		props.selectedBoard(0)
		
	}
	
	render() {
		
		return (
			<div className="nav-bar " data-spy="affix">
				<img className="trello-logo" alt="trello" src={logo}/>
			</div>
		)
	}
}

export default NavBar