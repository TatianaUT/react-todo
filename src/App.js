import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  return (
    <div>
      <header>
        <h1> TodoList </h1>
      </header>
      <AddTodoForm />
      <TodoList />
    </div>
  );
  }
export default App;

