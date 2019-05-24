import React, {Component} from 'react';
import './App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import ToDoList from '../ToDoList/ToDoList';
import MyVerticallyCenteredModal from '../Modal/Modal';

const generateKey = (pre) => {
  return `${ pre }_${ new Date().getTime() }`;
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      title: '',
      toDos: [{id: 1, title: 'Hardcoded Task 1', done: false}, 
              {id: 2, title: 'Hardcoded Task 2', done: false}, 
              {id: 3, title: 'Hardcoded Task 3', done: false}],
      modalShow: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    const title = this.state.title;
    const newToDos = this.state.toDos.concat({
      id: generateKey('id'),
      title: title,
      done: false
    });
    console.log(`Form was submitted as input: ${this.state.title}`);
    this.setState({
      title: '',
      toDos: newToDos
    });
  }

  handleChange (event) {
    const title = event.target.value;
    console.log(title);
    this.setState({
      title: title
    });
  }

  handleDelete (idToBeDeleted) {
    const newToDos = this.state.toDos.filter((toDo) => {
      return toDo.id !== idToBeDeleted
    });
    console.log(`${idToBeDeleted} got deleted from the List`);
    this.setState({
      toDos: newToDos
    });
  }

  handleDone (idToBeMarkedAsDone) {
    console.log(`${idToBeMarkedAsDone} is clicked`);
    const toDo = this.state.toDos.filter((toDo) => {
      return toDo.id === idToBeMarkedAsDone;
    })[0];
    toDo.done = !toDo.done;
    this.setState({
      toDos: this.state.toDos
    });
  }

  handleClearCompleted () {
    const newToDos = this.state.toDos.filter((toDo) =>{
      return !toDo.done
    })
    this.setState({
      toDos: newToDos
    });
  }

  render() {

    let modalClose = () => this.setState({
      modalShow: false 
    });

    return (
      <div className="App">
        <p>ToDoApp</p>

        <ButtonToolbar>
          <Button
            variant="danger"
            onClick={() => this.setState({ modalShow: true })}
          >
            Yeni Görev Ekle
          </Button>

          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </ButtonToolbar>

        <p>
          All: {this.state.toDos.length} | 
          Completed: {this.state.toDos.filter((toDo) => {return toDo.done}).length} | 
          Remaining: {this.state.toDos.filter((toDo) => {return !toDo.done}).length} | 
          <a href='#' onClick={this.handleClearCompleted}> Clear completed tasks</a>
        </p>

        <p></p>

        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} value={this.state.title} />
          <a href='#' onClick={this.props.handleDelete} > [x] </a>
          <button>Submit</button>
        </form>

        <ToDoList 
          toDos={this.state.toDos}
          handleDelete={this.handleDelete}
          handleDone={this.handleDone}
          />
      </div>
    )
  }
}

export default App;