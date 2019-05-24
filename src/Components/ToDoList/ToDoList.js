import React, { Component } from 'react';

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
          return <li key={index}>
                   <input 
                     type='checkbox'
                     checked={this.state.done}
                     onChange={this.handleOnChange}
                     style={{ fontSize: 'x-large'}}
                   />
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