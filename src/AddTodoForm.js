import React from 'react';

const AddTodoForm = (props) => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        console.log("Submit prevented");
        const todoTitle = event.target.tile.value;
        event.target.reset();
        props.onAddTodo(todoTitle);
    };
    return (
        <form onSubmit = {handleAddTodo}>
        <label htmlFor = "todoTitle"> Title: </ label>
        <input
            name='title'
            type='text'
            placeholder='What to do'
            id='todoTitle'
            ></input> 
        <button type='submit'>Add</button>
        </form>
    );
};

export default AddTodoForm;
