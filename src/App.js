import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

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
        if (todos.id === id) {
          return {
            ...todo, 
            completed: !todo.completed
          };
        }
        return todos;
      }
    ));
  }

  // removes todo given an id and returns. the filter returns an array with the id removed
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <p>To Do List</p>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} 
                toggleComplete={toggleComplete}
                removeTodo={removeTodo} />
    </div>
  );
}

export default App;
