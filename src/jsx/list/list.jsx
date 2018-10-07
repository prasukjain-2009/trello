import React, { Component } from 'react';
import cross from "../../svg/cross.svg";
import deletebtn from "../../png/delete.png";

import '../../css/list.css';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			newCardActive: false,
			newCardText: "",
			cardEditNumber: -1,
			cards: props.content.cards
		}
	}

	deleteCard(index) {
		let cards = this.state.cards;
		cards.splice(index, 1);
		this.props.updateCardsinList(this.state.name, cards);
		this.cancelAddCard()
	}

	updateCard(index) {
		let cards = this.state.cards;
		if (this.state.newCardText !== "") {
			cards[index] = this.state.newCardText;
			this.props.updateCardsinList(this.state.name, cards);
			this.setState({
				newCardActive: false,
				newCardText: "",
				cardEditNumber: -1
			});
		}
	}

	showAddCard(evt) {
		this.setState({ newCardActive: true });
	}

	cancelAddCard() {
		this.setState({
			newCardActive: false,
			newCardText: "",
			cardEditNumber: -1
		});
	}

	editCard(index) {
		this.setState({
			newCardActive: true,
			cardEditNumber: index,
			newCardText: this.state.cards[index]
		})

	}

	addCard(name) {
		let cards = this.state.cards;

		if (this.state.newCardText !== "") {
			cards.push(this.state.newCardText);
			this.props.updateCardsinList(name, cards);
			this.cancelAddCard();
			this.setState({
				newCardActive: false,
				newCardText: "",
				cardEditNumber: -1
			});
		}

	}

	deleteList() {
		let name = this.state.name;
		this.props.deleteList(name);
	}

	render() {
		const cards = this.state.cards.map((card, index) => {
			return (
				<div
					className={"card " + (this.state.cardEditNumber === index ? "hidden" : "")}
					key={this.state.name + "-card-" + JSON.stringify(index)}>
					{/* DELETE BUTTON */}
					<div className="card-delete-div"
					onClick={() => { this.deleteCard(index); }}>
						<img
							className="delete-btn"
							alt="delete card"
							src={deletebtn} />
					</div>
					<div className="card-content" onClick={evt => this.editCard(index)}>
						<span>{card}</span>
					</div>
				</div>)
		});

		return (
			<td key={this.state.name}>
				{/* onBlur={() => this.cancelAddCard()} */}
				<div className=" list-obj " >
					<div className="list-delete-div" 
						 onClick={() => {this.deleteList();}}>
						<img className="delete-btn" alt="delete card" src={deletebtn} />
					</div>
					<div className="list-head">{this.state.name}</div>
					{cards}
					<div className={"new-card " + (this.state.newCardActive ? "active" : "")}>
						<div className="new-card-btn" onClick={evt => {
							this.showAddCard(evt)
						}}>
							Add a card...
						</div>
						<div
							className="add-card">
							<textarea
								autoFocus
								placeholder="Enter title for this card ...."
								className="add-card-ta"
								onChange={evt => this.setState({ newCardText: evt.target.value })} 
								value={this.state.newCardText} />
							<div className="add-card-footer">
								<button className="add-card-btn"
									onClick={() =>
										this.state.cardEditNumber === -1 ? this.addCard(this.state.name) : this.updateCard(this.state.cardEditNumber)}>
									{this.state.cardEditNumber === -1 ? "Add Card" : "Update Card"}
								</button>
								<span>
									<img id="add-card-cancel" alt="cancel" src={cross} onClick={evt => this.cancelAddCard()} />
								</span>
							</div>
						</div>
					</div>
				</div>
			</td>
		)
	}
}

export default List;