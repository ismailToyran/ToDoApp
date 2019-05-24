import React, { Component } from 'react';

class ToDoList extends Component {

  render() {
    return (
      <ul>
        { this.props.items.map((item, i) => {
          return <li key={item}>{ item }</li>
        }) }
      </ul>
    )
  }
}

export default ToDoList;