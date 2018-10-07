import React from 'react'
import List from "../list/list.jsx";
import cross from "../../img/cross.svg";
import "../../css/boardBody.css";
import { connect } from 'react-redux';


class BoardBody extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			createList: false,
			newListName: "",
			board: ""
		}
	}

	updateCardsInList(name, card) {
		let board = this.props.board;
		board[name].cards = card;
		this.setState({ data: this.props.updateBoard(this.props.board, board) });
	}

	createList(listName) {
		if (listName === "") {
			alert("List name cannot be blank.")
		}
		else {

			let board = this.props.board;

			if (board.lists.indexOf(listName) !==-1 ) alert("List name already exist");
			else {
				board.lists.push(listName);
				board[listName] = { cards: [] };
				this.props.updateBoard(this.props.board, board);
				this.setState({ board: board })
			}

			this.setState({ createList: false, newListName: "" })
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
				name={list} />)
		});
		return (
			<table className="board-body" cellSpacing="10">
				<tbody>
					<tr valign="top">
						{lists}
						{/* Adding a List */}
						<td >
							<div className={"list-obj list-new" + (this.state.createList ? " create-list" : "")}>
								<button
									className="new-list-btn  "
									onClick={() => this.setState({ createList: true, newListName: "" })}>+ Add New List..
							</button>
								<div className="create-list-div"
								>
									<input
										placeholder="Enter list title..."
										className="create-new-tf"
										onChange={evt => this.setState({ newListName: evt.target.value })}
										value={this.state.newListName}
									/>
									
									<div className="create-btn-div">
										<button
											className="create-btn"
											alt="create List"
											onClick={() => {
												this.createList(this.state.newListName);
											}} >Add List
										</button>
										<img 
											onClick={()=>this.setState({newListName:"",createList:false})}
											className="cancel-btn"
											alt="cancel"
											src={cross}
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


function mapStatetoProps(state){
	
	return{
		board:state.activeBoard,
	}
}
export default connect(mapStatetoProps)(BoardBody);