import './App.css';
import React, { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import data from "./data.json";

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
  const doneApp = (element) => {
    let mapped = toDoList.map(task => {
      return task.id == element ? { ...task, complete: !task.complete } : { ...task, complete: task.complete};
    });
    setToDoList(mapped);
    // console.log(element);
  }

  const deleteApp = (element) => {
    let mapped = toDoList.filter(task => {
      return task.id == element ? !task.id : task.id;
    });
    setToDoList(mapped);
    // console.log(element);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList]; 
    let number = toDoList.map(task => {
      return task.id
    })
  let lengthData = toDoList.length + 1
    copy = userInput == '' ? [...copy] : [...copy, { id: lengthData, task: userInput, complete: false }];
    setToDoList(copy);
    console.log(number);
  }

  return (
    <div className="App">
      <div>Todolist : </div>
      <TodoList toDoList={toDoList}  handleToggle={handleToggle} handleFilter={handleFilter} doneApp={doneApp} deleteApp={deleteApp}/>
      <TodoForm addTask={addTask}/>
    </div>
  );
}

export default App;
