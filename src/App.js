import './App.css';
import { useEffect, useState } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Typography from "@material-ui/core/Typography";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // ...todos means append to all the others in the list already
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(todos.map(todo => {
        if (todo.id === id) {
          // if the todo item in the todo list is finished then for this id then return this object
          return {
            ...todo, 
            completed: !todo.completed
          };
        }
        return todo;
      }
    ));
  }

  // removes todo given an id and returns. the filter returns an array with the id removed
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16}} variant="h1">To Do List</Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} 
                toggleComplete={toggleComplete}
                removeTodo={removeTodo} />
    </div>
  );
}

export default App;
