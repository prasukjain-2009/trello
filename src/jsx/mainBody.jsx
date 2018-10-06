import React, {Component} from 'react';
import BoardHeading from './board/boardHeading.jsx';
import BoardBody from "./board/boardBody.jsx";

class MainBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: JSON.parse(window.localStorage.getItem("trelloContent"))
		}
	}
	updateBoard(board,bdata){
		let data=this.state.data;
		data[board]=bdata;
		window.localStorage.setItem("trelloContent",JSON.stringify(data))
		this.setState({data:data})
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