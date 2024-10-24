import styles from "./Todo.module.css";
import { useRef } from "react";
import { TodoActivities } from "../store/StoredItems";
import { useContext } from "react";
function Todo() {
  const { addNewTask } = useContext(TodoActivities);

  const task = useRef("");
  const date = useRef("");

  const AddTaskValue = (event) => {
    event.preventDefault();
    const Task = task.current.value;
    const Date = date.current.value;
    task.current.value = "";
    date.current.value = "";
    addNewTask(Task, Date);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo task"
            className={`${styles["todoinputs"]}`}
            ref={task}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            id=""
            className={`${styles["todoinputs"]}`}
            ref={date}
          />
        </div>
        <div className="col-2">
          <button
            className={`${styles["butt"]} btn btn-success`}
            onClick={AddTaskValue}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
