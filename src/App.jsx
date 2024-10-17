import AppName from "./components/AppName";
import Todo from "./components/Todo";
import Tasks from "./components/Tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";

function App() {
  const todoItems = [
    {
      activity: "go gym",
      date: "10/17/2024",
    },
    {
      activity: "bed time",
      date: "10/17/2024",
    },
    {
      activity: "Laughing",
      date: "10/17/2024",
    },
  ];
  return (
    <center className={`${styles["Contents"]}`}>
      <AppName />
      <Todo></Todo>
      <Tasks activities={todoItems}></Tasks>
    </center>
  );
}

export default App;
