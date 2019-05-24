import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done : false
    }

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange () {
    const _done = !this.state.done;
    this.setState({
      done: _done
    })
  }

  render() {
    return (
      <ul>
        { this.props.items.map((item, index) => {
          return <ListItem 
                   key={index}
                   item={item}
                   handleDelete={this.props.handleDelete.bind(null, item)}/>
        }) }
      </ul>
    )
  }
}

export default ToDoList;