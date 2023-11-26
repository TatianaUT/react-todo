import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  // create a new state variable named
  // newTedo with update function setNewTodo
  const [newTodo, setNewTodo] = React.useState("");
  console.log(`I'm a setNewTodo ${setNewTodo}`);
  console.log(`I'm a newTodo ${newTodo}`);
  return (
    <div>
      <header>
        <h1> TodoList </h1>
      </header>
      <AddTodoForm onAddTodo = {setNewTodo} />
      <p> New toDo: {newTodo} </p>
      <TodoList />
    </div>
    );
  };

export default App;

