import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import {Checkbox, IconButton, ListItem, Typography} from "@material-ui/core";

function Todo({ todo, toggleComplete, removeTodo }) {

    function handleCheckboxTodoComplete() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id)
    }


    //display items flex means line up component horizontally
    return(
        <ListItem style={{ display: "flex"}}> 
            <Checkbox checked={todo.completed} onClick={handleCheckboxTodoComplete}/>
            <Typography
                variant="body1" 
                style = {{ textDecoration: todo.completed ? "line-through" : null }} >   
                {todo.task}
            </Typography>
            <IconButton onClick={handleRemoveClick}>
                <CloseIcon/>
            </IconButton>
        </ListItem>
    );
}

export default Todo;