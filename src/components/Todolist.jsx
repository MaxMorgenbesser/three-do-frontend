import { useEffect } from "react"

export default function TodoList({taskList, setTaskList}){
useEffect(()=>{
    fetch('https://threedo-api-mm.web.app/tasks')
    .then((res)=>res.json())
    .then(tasks=>setTaskList(tasks))
    .catch(err=>console.log(err))
},[setTaskList])
    
    
    if (!taskList){
        return(<h1>No tasks to do</h1>)
    }
    return (<>
     
        <ul>
          {taskList.map(task=>(<li key={task.id}>{task.task}</li>))}
        </ul>
        </>
    )
}