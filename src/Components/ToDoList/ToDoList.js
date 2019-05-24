import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

class ToDoList extends Component {

  render() {
    return (
      <ul>
        { this.props.toDos.map((toDo) => {
          return <ListItem 
                   key={toDo.id}
                   toDo={toDo}
                   handleDone={this.props.handleDone.bind(null, toDo.id)}
                   handleDelete={this.props.handleDelete.bind(null, toDo.id)}/>
        }) }
      </ul>
    )
  }
}

export default ToDoList;