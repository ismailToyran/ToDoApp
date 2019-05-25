import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyVerticallyCenteredModal from '../Modal/Modal';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import TabSection from '../Tab/Tab';

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
      modalShow: false,
      tab: 'all'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
    this.handlePopupClose = this.handlePopupClose.bind(this);
    this.handleMoveUp = this.handleMoveUp.bind(this);
    this.handleMoveDown = this.handleMoveDown.bind(this);
    this.handleTabSelect = this.handleTabSelect.bind(this);
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

  handlePopupClose () {
    this.setState({
      title: ''
    })
  }

  handleMoveUp (idToBeMovedUp) {
    const toDos = this.state.toDos;

    const position = toDos.findIndex((index) => index.id === idToBeMovedUp)
    if (position < 0) {
      throw new Error("Given item not found.")
    } else if ( position === 0 ) {
      return
    }

    const toDo = toDos[position]
    const newToDos = toDos.filter((index) => index.id !== idToBeMovedUp)
    newToDos.splice(position - 1, 0, toDo)

    this.setState({
      toDos: newToDos
    })
  }

  handleMoveDown (idToBeMovedDown) {
    const toDos = this.state.toDos;

    const position = toDos.findIndex((index) => index.id === idToBeMovedDown)
    if (position < 0) {
      throw new Error("Given item not found.")
    } else if ( position === toDos.length - 1) {
      return
    }

    const toDo = toDos[position]
    const newToDos = toDos.filter((index) => index.id !== idToBeMovedDown)
    newToDos.splice(position + 1, 0, toDo)

    this.setState({
      toDos: newToDos
    })
  }

  handleTabSelect (tabIndex) {
    this.setState({
      tab: tabIndex
    })
  }

  toDos (count) {
    if (count === "all") {
      return this.state.toDos.length;
    } else if (count === "completed") {
      return this.state.toDos.filter((toDo) => { return toDo.done }).length;
    } else if (count === "remaining") {
      return this.state.toDos.filter((toDo) => { return !toDo.done }).length;
    }
  }

  render() {

    let modalClose = () => this.setState({
      modalShow: false 
    });

    return (
      <div className="App">

        <Container>
          <Row>
            <Col className="side-bar bg">
              <SideBar remaining={this.toDos("remaining")} />
            </Col>
            <Col className="main-bar bg">
              <Row>
              <Container>
                <Header />
                <TabSection activeTab={this.state.tab}
                            onSelect={this.handleTabSelect}
                            toDos={this.state.toDos}
                            handleDelete={this.handleDelete}
                            handleDone={this.handleDone}
                            handleMoveUp={this.handleMoveUp}
                            handleMoveDown={this.handleMoveDown}
                            remaining={this.toDos("remaining")}
                            />

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
                  onSubmit={this.handleSubmit}
                  onChange={this.handleChange}
                  value={this.state.title}
                  onClose={this.handlePopupClose}
                />
              </ButtonToolbar>

              <p>
                All: {this.toDos("all")} |
                Completed: {this.toDos("completed")} |
                Remaining: {this.toDos("remaining")} |
                <a href='#' onClick={this.handleClearCompleted}> Clear completed tasks</a>
              </p>

              
              </Container>
              </Row>
            </Col>
          </Row>
        </Container>
        
      </div>
    )
  }
}

export default App;