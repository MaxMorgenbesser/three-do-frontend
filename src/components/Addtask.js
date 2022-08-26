import { useState } from "react";
import { Input } from "antd";
const { Search } = Input;

export default function AddTask({ setTaskList }) {
  const [task, setTask] = useState();
  const addTask = () => {
    fetch("https://threedo-api-mm.web.app/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task, done: false }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTaskList(data);
        setTask("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Search
      value={task}
      onChange={(e) => setTask(e.target.value)}
      enterButton="Add"
      size="large"
      onSearch={addTask}
    />
  );
}
