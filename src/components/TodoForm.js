import React, { useState } from "react";
import uuid from "uuid";
import {Button, TextField} from "@material-ui/core";

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
      addTodo({ ...todo, id: uuid.v4() });
      setTodo({ ...todo, task: "" });
    }
  }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {/* TextField and Button come from MaterialUI */}
            <TextField label="Task" 
                name="task"
                type="outlined-basic" variant ="outlined" value={todo.task}    
                onChange={handleTaskInputChange}> 
            </TextField>

            <Button type="submit">Submit</Button>
        </form>
    );
}

export default TodoForm;