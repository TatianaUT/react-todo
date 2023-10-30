import React from 'react';
import TodoListItem from './TodoListItem'

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
  const TodoList = () => {
    return (
      //<div>
       // <h1> Todo List </h1>
        <ul>
          {/* render the TodoList */}
          {todoList.map((item) => {
            return <li key = {item.id}>
                  {item.title}
                  </li>;
          })}   
          {todoList.map((todo) => (
          <TodoListItem key = {todo.id.toString()} todo = {todo} />
          ))} 
        </ul>
        //<hr />
      //</div>
    );
  };
  export default TodoList;