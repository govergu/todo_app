import styles from "./Todo.module.css";
import css from "./Task.module.css";
function Task({ Activity, Date, DeleteTask }) {
  return (
    <div className={`${css["item"]} row`}>
      <div className="col-6">{Activity}</div>
      <div className="col-4">{Date}</div>
      <div className="col-2">
        <button
          className={`${styles["butt"]} btn btn-danger`}
          onClick={() => DeleteTask(Activity)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
