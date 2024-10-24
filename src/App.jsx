import AppName from "./components/AppName";
import Todo from "./components/Todo";
import Tasks from "./components/Tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import { useState } from "react";
import { TodoActivities } from "./store/StoredItems";

function App() {
  const [todoItems, updateItems] = useState([]);

  const addNewTask = (Task, Date) => {
    updateItems((currValue) => [...currValue, { activity: Task, date: Date }]);
  };

  const DeleteTask = (TaskName) => {
    updateItems(todoItems.filter((item) => item.activity !== TaskName));
  };

  return (
    <TodoActivities.Provider
      value={{
        todoItems,
        addNewTask,
        DeleteTask,
      }}
    >
      <div className={styles.containers}>
        <div className={`${styles["Contents"]}`}>
          <AppName />
          <Todo></Todo>
          <Tasks></Tasks>
        </div>
      </div>
    </TodoActivities.Provider>
  );
}

export default App;
