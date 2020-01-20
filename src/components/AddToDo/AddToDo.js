import React from 'react';
import './AddToDo.css';

export class AddToDo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleAddClick(e) {
    this.props.handleAddClick(this.state.name)
    this.setState({name: ''});
  }

  render() {
    return (
      <div className="add-todo">
        <input type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
          placeholder="What are you planning ToDo?"
          className="input"/>
        <button className="btn" onClick={this.handleAddClick}>Add</button>
      </div>
    );
  }  
}

export default AddToDo;