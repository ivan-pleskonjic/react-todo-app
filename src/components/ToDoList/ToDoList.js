import React from 'react';
import './ToDoList.css';
import ToDo from '../ToDo/ToDo';

export class ToDoList extends React.Component {

  constructor(props) {
    super(props);

    this.handleToggleDoneClick = this.handleToggleDoneClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleToggleDoneClick(id) {
    this.props.handleToggleDoneClick(id);
  }

  handleDeleteClick(id) {
    this.props.handleDeleteClick(id);
  }

  render() {
    return (
      <div className="list">
        {
          this.props.todos.map((todo) => {
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
    );
  }
}

export default ToDoList;