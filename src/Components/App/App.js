import React, {Component} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      toDos: [{id: 1, title: 'Sint amet ad eiusmod incididunt ad dolore ut dolore enim ut cillum qui.', done: false}, 
              {id: 2, title: 'Consequat mollit sit anim laborum quis ullamco eiusmod aute eiusmod eu non occaecat laborum.', done: false}, 
              {id: 3, title: 'Nisi ullamco eu amet dolore velit consectetur laborum.', done: false},
              {id: 4, title: 'Commodo eiusmod Lorem ut ipsum incididunt esse Lorem velit deserunt magna.', done: false},
              {id: 5, title: 'Duis sit ut deserunt consectetur quis do mollit dolore nisi esse anim.', done: false},
              {id: 6, title: 'Aute culpa magna labore labore culpa do sit Lorem reprehenderit.', done: false},
              {id: 7, title: 'Quis dolor aliquip consectetur reprehenderit occaecat sunt.', done: true},
              {id: 14, title: 'Dolor minim mollit veniam ea sunt et deserunt.', done: true},
              {id: 9, title: 'Occaecat quis ullamco elit amet nostrud non nisi laboris in culpa ex sunt consectetur.', done: true},
              {id: 10, title: 'Pariatur anim nulla eu aute sunt.', done: true},
              {id: 11, title: 'Laborum consequat consequat nulla consequat esse amet enim ipsum qui id reprehenderit.', done: true},
              {id: 12, title: 'Lorem occaecat veniam non consectetur officia reprehenderit.', done: false}],
      toDosRemaining: [],
      toDosCompleted: [],
      filtered: [],
      addModalShow: false,
      viewModalShow: false,
      tab: 'all'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleDeleteRemaining = this.handleDeleteRemaining.bind(this);
    this.handleDeleteCompleted = this.handleDeleteCompleted.bind(this);

    this.handleDone = this.handleDone.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
    this.handlePopupClose = this.handlePopupClose.bind(this);

    this.handleMoveUp = this.handleMoveUp.bind(this);
    this.handleMoveUpRemaining = this.handleMoveUpRemaining.bind(this);
    this.handleMoveUpCompleted = this.handleMoveUpCompleted.bind(this);

    this.handleMoveDown = this.handleMoveDown.bind(this);
    this.handleMoveDownRemaining = this.handleMoveDownRemaining.bind(this);
    this.handleMoveDownCompleted = this.handleMoveDownCompleted.bind(this);

    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
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
      toDos: newToDos,
    });

    this.handleHide ();
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

    this.handleOnLoad ();
  }

  handleDeleteRemaining (idToBeDeletedFromRemaining) {
    this.handleOnLoad ();
    
    const newToDos = this.state.toDos.filter((toDo) => {
      return toDo.id !== idToBeDeletedFromRemaining
    });

    const newToDosRemaining = this.state.toDosRemaining.filter((toDo) => {
      return toDo.id !== idToBeDeletedFromRemaining
    });

    console.log(`${idToBeDeletedFromRemaining} got deleted from the List`);
    this.setState({
      toDos: newToDos,
      toDosRemaining: newToDosRemaining
    });
  }

  handleDeleteCompleted (idToBeDeletedFromCompleted) {
    this.handleOnLoad ();
    
    const newToDos = this.state.toDos.filter((toDo) => {
      return toDo.id !== idToBeDeletedFromCompleted
    });

    const newToDosCompleted = this.state.toDosCompleted.filter((toDo) => {
      return toDo.id !== idToBeDeletedFromCompleted
    });

    console.log(`${idToBeDeletedFromCompleted} got deleted from the List`);
    this.setState({
      toDos: newToDos,
      toDosCompleted: newToDosCompleted
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

    this.handleOnLoad ();
  }

  handleOnLoad () {
    const newToDosRemaining = this.state.toDos.filter((toDo) => {
      return !toDo.done
    });

    const newToDosCompleted = this.state.toDos.filter((toDo) => {
      return toDo.done
    });

    this.setState({
      toDosRemaining: newToDosRemaining,
      toDosCompleted: newToDosCompleted
    });
  }

  handleHide () {
    this.setState({
      addModalShow: false,
      viewModalShow: false
    });
  }

  handleClearCompleted () {
    this.handleOnLoad();
    const newToDos = this.state.toDos.filter((toDo) =>{
      return !toDo.done
    })

    const newToDosCompleted = this.state.toDosCompleted.filter((toDo) =>{
      return !toDo.done
    })

    this.setState({
      toDos: newToDos,
      toDosCompleted: newToDosCompleted
    });
  }

  handlePopupClose () {
    this.setState({
      title: '',
      addModalShow: false
    })
  }

  handleMoveUp (idToBeMovedUp) {
    const position = this.state.toDos.findIndex((index) => index.id === idToBeMovedUp)
    if (position < 0) {
      throw new Error("Given item not found.")
    } else if ( position === 0 ) {
      return
    }

    const toDo = this.state.toDos[position]
    const newToDos = this.state.toDos.filter((index) => index.id !== idToBeMovedUp)
    newToDos.splice(position - 1, 0, toDo)

    this.setState({
      toDos: newToDos
    });
    this.handleOnLoad();
  }

  handleMoveUpRemaining (idToBeMovedUp) {
    this.handleOnLoad();

    const position = this.state.toDosRemaining.findIndex((index) => index.id === idToBeMovedUp)
    if (position < 0) {
      throw new Error("Given item not found.")
    } else if ( position === 0 ) {
      return
    }

    const toDoRemaining = this.state.toDosRemaining[position]
    const newToDosRemaining = this.state.toDosRemaining.filter((index) => index.id !== idToBeMovedUp)
    newToDosRemaining.splice(position - 1, 0, toDoRemaining)

    const positionOrigin = this.state.toDos.findIndex((index) => index.id === idToBeMovedUp)
    const toDo = this.state.toDos[positionOrigin]

    const switchId = this.state.toDosRemaining[position - 1].id
    const switchPosition = this.state.toDos.map((index) => index.id).indexOf(switchId);

    const newToDos = this.state.toDos.filter((index) => index.id !== idToBeMovedUp)
    newToDos.splice(switchPosition, 0, toDo)

    this.setState({
      toDos: newToDos,
      toDosRemaining: newToDosRemaining
    });
  }

  handleMoveUpCompleted (idToBeMovedUp) {
    this.handleOnLoad();

    const position = this.state.toDosCompleted.findIndex((index) => index.id === idToBeMovedUp)
    if (position < 0) {
      throw new Error("Given item not found.")
    } else if ( position === 0 ) {
      return
    }

    const toDoCompleted = this.state.toDosCompleted[position]
    const newToDosCompleted = this.state.toDosCompleted.filter((index) => index.id !== idToBeMovedUp)
    newToDosCompleted.splice(position - 1, 0, toDoCompleted)

    const positionOrigin = this.state.toDos.findIndex((index) => index.id === idToBeMovedUp)
    const toDo = this.state.toDos[positionOrigin]

    const switchId = this.state.toDosCompleted[position - 1].id
    const switchPosition = this.state.toDos.map((index) => index.id).indexOf(switchId);

    const newToDos = this.state.toDos.filter((index) => index.id !== idToBeMovedUp)
    newToDos.splice(switchPosition, 0, toDo)

    this.setState({
      toDos: newToDos,
      toDosCompleted: newToDosCompleted
    });
  }

  handleMoveDown (idToBeMovedDown) {
    const position = this.state.toDos.findIndex((index) => index.id === idToBeMovedDown)
    if (position < 0) {
      throw new Error("Given item not found.")
    } else if ( position === this.state.toDos.length - 1) {
      return
    }

    const toDo = this.state.toDos[position]
    const newToDos = this.state.toDos.filter((index) => index.id !== idToBeMovedDown)
    newToDos.splice(position + 1, 0, toDo)

    this.setState({
      toDos: newToDos
    });

    this.handleOnLoad();
  }

  handleMoveDownRemaining (idToBeMovedDown) {
    this.handleOnLoad();

    const position = this.state.toDosRemaining.findIndex((index) => index.id === idToBeMovedDown)
    if (position < 0) {
      throw new Error("Given item not found.")
    } else if ( position === this.state.toDosRemaining.length - 1) {
      return
    }

    const toDoRemaining = this.state.toDosRemaining[position]
    const newToDosRemaining = this.state.toDosRemaining.filter((index) => index.id !== idToBeMovedDown)
    newToDosRemaining.splice(position + 1, 0, toDoRemaining)

    const positionOrigin = this.state.toDos.findIndex((index) => index.id === idToBeMovedDown)
    const toDo = this.state.toDos[positionOrigin]

    const switchId = this.state.toDosRemaining[position + 1].id
    const switchPosition = this.state.toDos.map((index) => index.id).indexOf(switchId);

    const newToDos = this.state.toDos.filter((index) => index.id !== idToBeMovedDown)
    newToDos.splice(switchPosition, 0, toDo)

    this.setState({
      toDos: newToDos,
      toDosRemaining: newToDosRemaining
    });
  }

  handleMoveDownCompleted (idToBeMovedDown) {
    this.handleOnLoad();

    const position = this.state.toDosCompleted.findIndex((index) => index.id === idToBeMovedDown)
    if (position < 0) {
      throw new Error("Given item not found.")
    } else if ( position === this.state.toDosCompleted.length - 1) {
      return
    }

    const toDoCompleted = this.state.toDosCompleted[position]
    const newToDosCompleted = this.state.toDosCompleted.filter((index) => index.id !== idToBeMovedDown)
    newToDosCompleted.splice(position + 1, 0, toDoCompleted)

    const positionOrigin = this.state.toDos.findIndex((index) => index.id === idToBeMovedDown)
    const toDo = this.state.toDos[positionOrigin]

    const switchId = this.state.toDosCompleted[position + 1].id
    const switchPosition = this.state.toDos.map((index) => index.id).indexOf(switchId);

    const newToDos = this.state.toDos.filter((index) => index.id !== idToBeMovedDown)
    newToDos.splice(switchPosition, 0, toDo)

    this.setState({
      toDos: newToDos,
      toDosCompleted: newToDosCompleted
    });
  }

  handleTabSelect (tabIndex) {
    this.setState({
      tab: tabIndex
    })
  }

  handleSelectAll () {
    // Doldurulmak istenirse sonrası için
    console.log('clicked handleSelectAll');
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
                            toDosRemaining={this.state.toDosRemaining}
                            toDosCompleted={this.state.toDosCompleted}
                            handleDelete={this.handleDelete}
                            handleDeleteRemaining={this.handleDeleteRemaining}
                            handleDeleteCompleted={this.handleDeleteCompleted}
                            handleDone={this.handleDone}
                            handleOnLoad={this.handleOnLoad}
                            handleMoveUp={this.handleMoveUp}
                            handleMoveUpRemaining={this.handleMoveUpRemaining}
                            handleMoveUpCompleted={this.handleMoveUpCompleted}
                            handleMoveDown={this.handleMoveDown}
                            handleMoveDownRemaining={this.handleMoveDownRemaining}
                            handleMoveDownCompleted={this.handleMoveDownCompleted}
                            handleClearCompleted={this.handleClearCompleted}
                            handleSelectAll={this.handleSelectAll}
                            remaining={this.toDos("remaining")}
                            onClickAdd={() => this.setState({ addModalShow: true })}
                            onClickView={() => this.setState({ viewModalShow: true })}
                            showAdd={this.state.addModalShow}
                            showView={this.state.viewModalShow}
                            onHide={this.handleHide}
                            onSubmit={this.handleSubmit}
                            onChange={this.handleChange}
                            value={this.state.title}
                            onClose={this.handlePopupClose}
                            />
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