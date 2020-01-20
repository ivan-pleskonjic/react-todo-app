import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import AddToDo from './components/AddToDo/AddToDo';
import ToDoList from './components/ToDoList/ToDoList';
import INITAL_STATE from './consts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITAL_STATE;

    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleToggleDoneClick = this.handleToggleDoneClick.bind(this);
  }

  handleAddClick(name) {
    if (name === '') {
      return;
    }
    const newId = this.state.nextId;
    let todos = this.state.todos.slice();
    todos.push({id: newId, name: name, isDone: false});
    this.setState({
        nextId: newId + 1,
        todos: todos
    });
  }

  handleDeleteClick(id) {
    const todos = this.state.todos.filter((el) => el.id !== id);
    this.setState({ todos: todos });
  }

  handleToggleDoneClick(id) {
    const todos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.isDone = !todo.isDone
      }
      return todo;
    })
    this.setState({todos: todos});
  }

  render() {    
    return (
      <div className="app-container">
        <Card title="ToDo App">
          <AddToDo
            handleAddClick={this.handleAddClick}
          />
          <ToDoList
            todos={this.state.todos}
            handleDeleteClick={this.handleDeleteClick}
            handleToggleDoneClick={this.handleToggleDoneClick}
          />
        </Card>
      </div>
    );
  }
}

export default App;
