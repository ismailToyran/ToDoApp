import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render() {

    return (
      <li>
        {this.props.toDo.title}
        <a href='#' onClick={this.props.handleDelete} > [x] </a>
        <a href='#' onClick={this.props.handleMoveUp}>&#x25B2;</a>
        <a href='#' onClick={this.props.handleMoveDown}>&#x25BC;</a>
      </li>
    )
  }
}

ListItem.propTypes = {
  toDo: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired
}

export default ListItem;