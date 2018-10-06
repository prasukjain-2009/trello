import React, {Component} from 'react';
import trelloContent from '../js/trelloContent'
import BoardHeading from './board/boardHeading.jsx';
import BoardBody from "./board/boardBody.jsx";

class MainBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: trelloContent.data
		}
	}
	
	
	render() {
		return (
			<div className="container-fluid p-1 content ml-0">
				<BoardHeading board={this.state.data.boards[this.props.board]}/>
				<BoardBody
					board={this.state.data[this.state.data.boards[this.props.board]]}
					updateBoard={(brd, data) => this.updateBoard(brd, data)}/>
			</div>
		)
	}
}

export default MainBody