import Task from "./Task";

const Tasks = ({ activities }) => {
  return (
    <div className="container">
      {activities.map((items) => (
        <Task activity={items.activity} date={items.date}></Task>
      ))}
    </div>
  );
};

export default Tasks;
