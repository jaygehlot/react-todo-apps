import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        complete: false           
    });

function handleTaskInputChange(e) {
    setTodo({...todo, task: e.target.value});
}

function handleSubmit(e) {
    e.preventDefault(); //prevents default browser submit functionality
    // trim() gets rid of string whitespace and only proceeds if task is not empty
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            name="task"
            type="text" value={todo.task}    
            onChange={handleTaskInputChange}></input>
            <button type="submit">Submit</button>
        </form>
    );
}

export default TodoForm;