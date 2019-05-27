import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }

  render() {

    let filteredTitles = this.props.toDos.filter((search) => {
      return search.title.indexOf(this.state.search) !== -1;
    })

    return (
      <div>
      <input 
						type="text" 
						className="input" 
            placeholder="Search..." 
            value={this.state.search}
						onChange={this.handleChange}
						/>
      <ul>
        { filteredTitles.map((toDo) => {
          return <ListItem 
                   key={toDo.id}
                   toDo={toDo}
                   handleDone={this.props.handleDone.bind(null, toDo.id)}
                   handleDelete={this.props.handleDelete.bind(null, toDo.id)}
                   handleMoveUp={this.props.handleMoveUp.bind(null, toDo.id)}
                   handleMoveDown={this.props.handleMoveDown.bind(null, toDo.id)} />
        }) }
      </ul>
      </div>
    )
  }
}

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired
}

export default ToDoList;