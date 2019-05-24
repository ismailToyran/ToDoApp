import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render() {

    return (
      <li>
        <input
          type='checkbox'
          checked={this.props.toDo.done}
          onChange={this.props.handleDone}
          style={{ fontSize: 'x-large' }}
        />
        {this.props.toDo.title}
        <a href='#' onClick={this.props.handleDelete} >
          [x]
        </a>
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