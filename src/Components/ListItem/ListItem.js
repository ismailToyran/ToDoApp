import React, { Component } from 'react';

class ListItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      done: false
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
    const item = this.props.item;

    return (
      <li>
        <input
          type='checkbox'
          checked={this.state.done}
          onChange={this.handleOnChange}
          style={{ fontSize: 'x-large' }}
        />
        {item}
        <a href='#' onClick={this.props.handleDelete}>
          [x]
        </a>
      </li>
    )
  }
}

export default ListItem;