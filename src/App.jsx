import AppName from "./components/AppName";
import Todo from "./components/Todo";
import Tasks from "./components/Tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [todoItems, updateItems] = useState([]);

  const addNewTask = (Task, Date) => {
    updateItems([...todoItems, { activity: Task, date: Date }]);
  };

  const DeleteTask = (TaskName) => {
    updateItems(todoItems.filter((item) => item.activity !== TaskName));
  };

  return (
    <div className={styles.containers}>
      <div className={`${styles["Contents"]}`}>
        <AppName />
        <Todo addNewTask={addNewTask}></Todo>
        <Tasks activities={todoItems} DeleteTask={DeleteTask}></Tasks>
      </div>
    </div>
  );
}

export default App;
