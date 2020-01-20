import React from 'react';
import './ToDo.css';

export class ToDo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.isDone
    };

    this.handleToggleDoneClick = this.handleToggleDoneClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleToggleDoneClick () {
    this.setState({checked: !this.state.checked})
    this.props.handleToggleDoneClick(this.props.id);
  }

  handleDeleteClick() {
    this.props.handleDeleteClick(this.props.id);
  }

  render() {
    return (
      <div className="todo">
        <label>
          <input type="checkbox" checked={this.state.checked} onChange={this.handleToggleDoneClick} className="check" />
          <span className="name">{this.props.isDone ? (<strike>{this.props.name}</strike>) : this.props.name}</span>
        </label>      
        <span className="remove" onClick={this.handleDeleteClick}>X</span>
      </div>
    );
  }  
}

export default ToDo;