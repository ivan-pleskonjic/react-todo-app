import React from 'react';
import './ToDoList.css';
import ToDo from '../ToDo/ToDo';
import AddToDo from '../AddToDo/AddToDo';
import INITAL_STATE from '../../consts';

export class ToDoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = INITAL_STATE;

    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleToggleDoneClick = this.handleToggleDoneClick.bind(this);
  }

  handleAddClick(name) {
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
      <div>
        <AddToDo
            handleAddClick={this.handleAddClick}></AddToDo>      
        <div className="list">
          {
            this.state.todos.map((todo) => {
              return (
                <ToDo key={todo.id}
                  id={todo.id}
                  name={todo.name}
                  isDone={todo.isDone}
                  handleToggleDoneClick={this.handleToggleDoneClick}
                  handleDeleteClick={this.handleDeleteClick}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default ToDoList;