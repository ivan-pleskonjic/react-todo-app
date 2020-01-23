import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import ToDoList from './components/ToDoList/ToDoList';

class App extends React.Component {

  render() {    
    return (
      <div className="app-container">
        <Card title="ToDo App">
          <ToDoList />
        </Card>
      </div>
    );
  }
}

export default App;
