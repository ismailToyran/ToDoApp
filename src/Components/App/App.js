import React, {Component} from 'react';
import './App.css';
import ToDoList from '../ToDoList/ToDoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      text: '',
      items: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    const text = this.state.text;
    const newItems = this.state.items.concat(text);
    /* console.log(`Form was submitted as input: ${this.state.text}`); */
    this.setState({
      text: '',
      items: newItems
    });
  }

  handleChange (event) {
    const text = event.target.value;
    /* console.log(text); */
    this.setState({
      text: text
    });
  }

  render() {
    return (
      <div className="App">

        <p>ToDoApp</p>

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>Submit</button>
        </form>

        <ToDoList items={this.state.items}/>
      </div>
    )
  }
}

export default App;
