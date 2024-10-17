import styles from "./Todo.module.css";
import css from "./Task.module.css";
function Task({ activity, date }) {
  return (
    <div className={`${css["item"]} row`}>
      <div className="col-6">{activity}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button className={`${styles["butt"]} btn btn-danger`}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
