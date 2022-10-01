import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Chess game",
      day: "02/10/2022 2pm",
      reminder: true,
    },
    {
      id: 2,
      text: "TCS assignment",
      day: "04/10/2022 10am",
      reminder: false,
    },
    {
      id: 3,
      text: "GDSC meet",
      day: "01/10/2022 9pm",
      reminder: true,
    },
  ]);
  
  //Creating function to add events after form submission
  const addTask = (task) => {
    // console.log(task)
    const id = Math.floor(Math.random()*10000)+1

    const newTask ={id, ...task}
    setTasks([...tasks, newTask])
  }

  // Creating function to delete events when 'X' is clicked
  const deleteTask = (id) => {
    // For checking purposes
    console.log("delete", id);

    // This will filter i.e not show the task id whose 'X' was clicked
    setTasks(tasks.filter((task) => task.id != id));
  };

  // Function to change reminder class
  const toggleReminder = (id) => {
    console.log("Toggled reminder for ID: ", id);
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks present"
      )}
    </div>
  );
}

export default App;
