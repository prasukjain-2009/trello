import React, {Component} from 'react';
import BoardHeading from './board/boardHeading.jsx';
import BoardBody from "./board/boardBody";
import {connect} from "react-redux";
import selectBoard,{updateData} from './../js/action/index.js';
import { bindActionCreators } from 'redux';


class MainBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
			selectedBoard:"Kubric UI"
		}
		this.props.selectBoard(this.state.selectedBoard)
	}
	componentWillUnmount(){
		console.log("hello");
		
		setTimeout(()=>{console.log("hellp",500);
		})
		this.props.updateData(this.state.data)
	}
	updateBoard(board,bdata){
		let data=this.state.data;
		data[board]=bdata;
		this.setState({data:data})
	}
	
	render() {
		return (
			<div className="container-fluid p-1 content ml-0">
				<BoardHeading board={this.state.selectedBoard}/>
				<BoardBody
					updateBoard={(brd, data) => this.updateBoard(brd, data)}/>
			</div>
		)
	}
}

function mapStatetoProps(state){
	return{
		data:state.data,
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({selectBoard:selectBoard,
	updateData:updateData},dispatch)
}
export default connect(mapStatetoProps,mapDispatchToProps)(MainBody)