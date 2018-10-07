import React, { Component } from 'react';
import BoardHeading from './board/boardHeading.jsx';
import BoardBody from "./board/boardBody";
import { connect } from "react-redux";
import { selectBoard, updateData } from '../js/action';
import { bindActionCreators } from 'redux';


class MainBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
			activeBoard: this.props.data.boards[0]
		};
		this.props.selectBoard("Kubric UI")
	}

	saveStateToLocalStorage() {
		this.props.updateData(this.state.data)
	}

	componentDidMount() {
		window.addEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
	}

	componentWillUnmount() {
		this.saveStateToLocalStorage();
		window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
	}

	updateBoard(bdata) {
		let data = this.state.data;
		data[this.state.activeBoard] = bdata;
		this.setState({ data: data })
	}

	render() {
		return (
			<div className="container-fluid p-1 content ml-0">
				<BoardHeading board={this.state.activeBoard} />
				<BoardBody
					board={this.state.data[this.state.activeBoard]}
					updateBoard={(brd, data) => this.updateBoard(data)} />
			</div>
		)
	}
}

function mapStatetoProps(state) {
	return {
		data: state.data,
		activeBoard: state.activeBoard
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		selectBoard: selectBoard,
		updateData: updateData
	}, dispatch)
}
export default connect(mapStatetoProps, mapDispatchToProps)(MainBody)