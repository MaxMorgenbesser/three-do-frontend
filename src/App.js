import { useState } from 'react';
import './App.css';
import AddTask from './components/Addtask';
import TodoList from './components/Todolist';

function App() {
  const [taskList,setTaskList]=useState('')

  return (
   <><h1>
    three do app</h1>
    <TodoList taskList={taskList} setTaskList={setTaskList}/>
    <AddTask setTaskList={setTaskList} />
    </>
  );
}

export default App;
