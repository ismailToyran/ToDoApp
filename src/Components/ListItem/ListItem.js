import React, { Component } from 'react';

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

export default ListItem;