import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import "./ListItem.css";

import MyModalView from '../Modal/MyModalView';

class ListItem extends Component {
  render() {
    return (

      // Width 540'tan büyükse
      !this.props.checkWidth ?

        <div className="li-container">
          <li className="d-flex align-items-center">
            <input
              className="costum-checkbox"
              aria-label="Check boxes desktop"
              type="checkbox"
              checked={this.props.toDo.done}
              onChange={this.props.handleDone} />
            <span className={this.props.toDo.done ? 'done col-md-8' : 'col-md-8'}>{this.props.toDo.title}</span>
            <div className="d-flex ml-auto">
              <a href='#tasks' onClick={this.props.handleDelete}><div className="icon-bg text-center" id="delete-icon"></div></a>
              <a href='#tasks' onClick={this.props.handleMoveUp}><div className="icon-bg text-center" id="arrow-up-icon"></div></a>
              <a href='#tasks' onClick={this.props.handleMoveDown}><div className="icon-bg text-center" id="arrow-down-icon"></div></a>
            </div>
          </li>
          <hr className="line"></hr>
        </div>

        :

        // Width 540'tan küçükse
        <div>
          <div className="li-container">
            <ButtonToolbar>
              <li className="d-flex align-items-center"
                onClick={this.props.onClickView}>
                <input
                  className="costum-checkbox"
                  aria-label="Check boxes mobile"
                  type="checkbox"
                  checked={this.props.toDo.done}
                  onChange={this.props.handleDone} />
                <span className={this.props.toDo.done ? 'done view-width col-md-8' : 'view-width col-md-8'}>{this.props.toDo.title}</span>
              </li>
              <hr className="line"></hr>
              <MyModalView
                show={this.props.showView}
                onSubmit={this.props.onSubmit}
                onChange={this.props.onChange}
                value={this.props.toDo.title}
                onClose={this.props.onClose}
                onHide={this.props.onHide}
                handleDelete={this.props.handleDelete}
                handleMoveUp={this.props.handleMoveUp}
                handleMoveDown={this.props.handleMoveDown}
              />
            </ButtonToolbar>
          </div>
        </div>
    )
  }
}

ListItem.propTypes = {
  toDo: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired
}

export default ListItem;