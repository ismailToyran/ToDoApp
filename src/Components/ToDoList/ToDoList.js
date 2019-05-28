import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';

import plusImg from './plus.png';
import arrowRightImg from './arrow-right.png';

import "./ToDoList.css";

import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import MyModalSubmit from '../Modal/MyModalSubmit';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }

  render() {

    let filteredTitles = this.props.toDos.filter((search) => {
      return search.title.indexOf(this.state.search) !== -1;
    })

    return (
      <div className="tab-item-container">
        <div className="d-flex top-bar">
        <input
          type="text"
          className="input col-md-8"
          placeholder="Arama..."
          value={this.state.search}
          onChange={this.handleSearch}
          />
        <ButtonToolbar className="ml-auto">
          <Button onClick={this.props.onClickAdd}>{this.props.checkWidth ? '' : 'Yeni Görev Ekle '}<img className="plus-img" src={plusImg} /></Button>

          <MyModalSubmit
            show={this.props.showAdd}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            value={this.props.value}
            onClose={this.props.onClose}
            onHide={this.props.onHide}
            />
        </ButtonToolbar>
        </div>
        <ul>
          {filteredTitles.map((toDo) => {
            return <ListItem
              key={toDo.id}
              toDo={toDo}
              toDos={this.props.toDos}
              handleDone={this.props.handleDone.bind(null, toDo.id)}
              handleDelete={this.props.handleDelete.bind(null, toDo.id)}
              handleMoveUp={this.props.handleMoveUp.bind(null, toDo.id)}
              handleMoveDown={this.props.handleMoveDown.bind(null, toDo.id)} 
              checkWidth={this.props.checkWidth}
              onClickView={this.props.onClickView}
              showView={this.props.showView}
              onHide={this.props.onHide}
              onChange={this.props.onChange}
              value={this.props.value}
              />
          })}
        </ul>
        <hr className="line"></hr>
        <div className="d-flex" id="bottom-bar">
          <a href='#' id="choose-all" onClick={this.props.handleSelectAll}>Hepsini Seç <img className="arrow-right-img" src={arrowRightImg} /></a>
          <a href='#' id="delete-completed" onClick={this.props.handleClearCompleted} className="ml-auto"> Tamamlanmış görevleri sil</a>
        </div>
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