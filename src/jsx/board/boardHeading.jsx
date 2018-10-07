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
      </div>
    )
  }
}
export default BoardHeading;