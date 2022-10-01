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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
