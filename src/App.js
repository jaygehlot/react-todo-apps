import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Task from './Components/Task';

function App() {

  const [taskName, setTaskName] = useState("")
  const [time, setTime] = useState("")
  const [taskList, setTaskList] = useState([])

  function addTask() {
    setTaskList([...taskList, {task: taskName, time: time}]);  //... means take existing stuff from taskList array and then add objects to it
    setTaskName("");  //reset task name
    setTime(""); //rest time
  }

  return (
   <div className="App">
     <h1>TODO list</h1>
     
     <label>Task Name: </label>
     <input type="text" id="text" onChange={(input) => setTaskName(input.target.value)} ></input>

     <label>Time: </label>
     <input type="text" id="time" onChange={(input) => setTime(input.target.value)}></input>

     <button onClick={addTask}>Add</button>

     {taskList.map(task => {
       return <Task taskName={task.task} time={task.time}/>   //accessing object properties from taskList above
     })}
   </div> 
  );
}

export default App;
