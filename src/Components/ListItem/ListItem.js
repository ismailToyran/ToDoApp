import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./ListItem.css";

class ListItem extends Component {
  render() {

    return (
      <div className="li-container">
        <hr className="line"></hr>
        <li className="d-flex align-items-center">
          <input
            className="costum-checkbox"
            type="checkbox"
            checked={this.props.toDo.done}
            onChange={this.props.handleDone} />
          <span className={ this.props.toDo.done ? 'done col-md-9' : 'col-md-9'}>{this.props.toDo.title}</span>
          <div className="d-flex ml-auto">
            <a href='#' onClick={this.props.handleDelete}><div className="icon-bg text-center" id="delete-icon"></div></a>
            <a href='#' onClick={this.props.handleMoveUp}><div className="icon-bg text-center" id="arrow-up-icon"></div></a>
            <a href='#' onClick={this.props.handleMoveDown}><div className="icon-bg text-center" id="arrow-down-icon"></div></a>
          </div>
        </li>
      </div>
    )
  }
}

ListItem.propTypes = {
  toDo: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired
}

export default ListItem;