import Task from "./Task";
import css from "./Task.module.css";
const Tasks = ({ activities, DeleteTask }) => {
  let content;
  if (activities === null || activities.length === 0) {
    content = <p>No task to do</p>;
  }
  return (
    <div className={`container ${css.container_slot}`}>
      {content}
      {activities.map((items) => (
        <Task
          Activity={items.activity}
          Date={items.date}
          key={items}
          DeleteTask={DeleteTask}
        ></Task>
      ))}
    </div>
  );
};

export default Tasks;
