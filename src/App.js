import React from 'react';

const todoList = [
  {
    id: 1,
    title: 'Test 1'
  },
  {
    id: 2,
    title: 'Test 2'
  },
  {
    id: 3,
    title: 'Test 3'
  }
]

function App() {
  return (
    <div>
      <h1> Todo List </h1>
      <ul>
        {todoList.map(function(item) {
          return <li key = {item.id}>
            {item.title}
            </li>;
        })}      
      </ul>
    </div>
  );
}
export default App;
