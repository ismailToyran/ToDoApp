import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired
}

export default ToDoList;