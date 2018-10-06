import React from 'react'
import List from "../list/list.jsx";
import "../../css/boardBody.css";
import AddIcon from "../../svg/add.svg";


class BoardBody extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			createList: true,
			newListName: "",
			board: ""
		}
	}
	
	updateCardsInList(name, card) {
		let board = this.props.board;
		board[name].cards = card;
		this.props.updateBoard(this.props.board, board);
	}
	
	createList() {
		let listName = this.state.newListName;
		if (listName === "") alert("List name cannot be blank.");
		else {
			console.log("JSON.stringify(board)");
			let board = this.props.board;
			if (listName in board.lists) alert("List name already exist");
			else {
				board.lists.push(listName);
				board[listName] = {cards: []};
				this.props.updateBoard(this.props.board, board);
				this.setState({board: board})
			}
		}
	}
	
	deleteList(name, index) {
		
		let board = this.props.board;
		board.lists.splice(index, 1);
		delete board[name];
		this.props.updateBoard(this.props.board, board)
	}
	
	render() {
		
		const lists = this.props.board.lists.map((list, index) => {
			return (<List
				key={list}
				deleteList={(name) => this.deleteList(list, index)}
				updateCardsinList={(name, cards) => this.updateCardsInList(name, cards)}
				content={this.props.board[list]}
				name={list}/>)
		});
		return (
			<table className="board-body" cellSpacing="10">
				<tbody>
				<tr valign="top">
					{lists}
					{/* Adding a List */}
					<td>
						<div className={"list-obj list-new" + (this.state.createList ? " create-list" : "")}>
							<button
								className="new-list-btn  "
								onClick={() => this.setState({createList: true, newListName: ""})}> Add a list..
							</button>
							<div className="create-list-div"
							     onBlur={() => {
								     this.setState({createList: false, newListName: ""})
							     }}>
								<div className="create-btn-div">
									<img
										className="create-btn"
										alt="create List"
										src={AddIcon}
										onClick={() => {
											this.createList();
										}}/>
								</div>
								<div className="create-new-tf-div">
									
									<input
										className="create-new-tf"
										onChange={(evt) => {
											this.setState({newListName: evt.target.value})
										}}
										onKeyPress={(evt) => evt.keyCode === 13 ? this.createList() : ""}
										value={this.state.newListName}
									/>
								</div>
							</div>
						</div>
					</td>
				</tr>
				</tbody>
			</table>
		)
	}
}

export default BoardBody;