import { useState } from "react";
import Header from "./components/Header";
import Tasks from './components/Tasks';

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

// Creating function to delete events when 'X' is clicked
const deleteTask = (id)=> {
  // For checking purposes
  console.log('delete',id) 

  // This will filter i.e not show the task id whose 'X' was clicked
  setTasks(tasks.filter((task)=>task.id!=id))
}

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
