import React, {Component} from 'react';
import BoardHeading from './board/boardHeading.jsx';
import BoardBody from "./board/boardBody.jsx";
import {connect} from "react-redux";
import selectBoard from './../action/index';
import { bindActionCreators } from 'redux';


class MainBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data
		}
	}
	componentWillUnmount(){
		window.localStorage.setItem("trelloContent",JSON.stringify(this.state.data))
	}
	updateBoard(board,bdata){
		let data=this.state.data;
		data[board]=bdata;
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

function mapStatetoProps(state){
	return{
		data:state.data
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({selectBoard:selectBoard},dispatch)
}
export default connect(mapStatetoProps,mapDispatchToProps)(MainBody)