import React, { Component } from 'react';

class ToDoList extends Component {

  render() {
    return (
      <ul>
        { this.props.items.map((item, index) => {
          return <li key={index}>
                   { item }
                   <a href='#' onClick={this.props.handleDelete.bind(null, item)}>
                     [x]
                   </a>
                 </li>
        }) }
      </ul>
    )
  }
}

export default ToDoList;