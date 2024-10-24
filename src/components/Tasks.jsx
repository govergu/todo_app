import { useContext } from "react";
import Task from "./Task";
import css from "./Task.module.css";
import { TodoActivities } from "../store/StoredItems";
const Tasks = () => {
  let { todoItems } = useContext(TodoActivities);
  let content;
  if (todoItems === null || todoItems.length === 0) {
    content = <p>No task to do</p>;
  }
  return (
    <div className={`container ${css.container_slot}`}>
      {content}
      {todoItems.map((items) => (
        <Task
          Activity={items.activity}
          Date={items.date}
          key={items.activity}
        ></Task>
      ))}
    </div>
  );
};

export default Tasks;
