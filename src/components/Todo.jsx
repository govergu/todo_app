import styles from "./Todo.module.css";
function Todo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo task"
            className={`${styles["todoinputs"]}`}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            id=""
            className={`${styles["todoinputs"]}`}
          />
        </div>
        <div className="col-2">
          <button className={`${styles["butt"]} btn btn-success`}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
