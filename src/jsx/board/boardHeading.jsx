import React, {Component} from 'react';
import "../../css/boardHeading.css"

class BoardHeading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: props.board
    }
  }
  render() {
    return (
      <div className="board-heading my-4 row">
          <div
            className="bhead-body label col-lg-2, col-md-4 col-sm-10">{this.props.board}</div>
          <input
            value={this.state.board} onChange={evt => this.setState({ board: evt.target.value })}
            className="bhead-body tf  col-lg-2, col-md-4 col-sm-12 col-xs-12" />
        
      </div>
    )
  }
}
export default BoardHeading;