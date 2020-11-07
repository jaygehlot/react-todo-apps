import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {

    function handleCheckboxTodoComplete() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id)
    }


    //display items flex means line up component horizontally
    return(
        <div style={{ display: "flex"}}> 
            <input type="checkbox" onClick={handleCheckboxTodoComplete}/>
            <li 
                style = {{ color: "white", textDecoration: todo.completed ? "line-through" : null }} >   
                {todo.task}
            </li>
            <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default Todo;