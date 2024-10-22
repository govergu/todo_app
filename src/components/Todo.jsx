import { useState } from "react";
import styles from "./Todo.module.css";
function Todo({ addNewTask }) {
  const [Task, updateTask] = useState();
  const [Date, updateDate] = useState();
  const AddTaskValue = () => {
    console.log("this function is called");
    addNewTask(Task, Date);
    updateDate("");
    updateTask("");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo task"
            className={`${styles["todoinputs"]}`}
            value={Task}
            onChange={(event) => updateTask(event.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            id=""
            className={`${styles["todoinputs"]}`}
            value={Date}
            onChange={(event) => updateDate(event.target.value)}
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
