import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);


  useEffect(()=>{
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    
    getTasks()
  }, [])

  
  //Fetching tasks from the json server  file --> db.json
  const fetchTasks = async()=>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    console.log(data)

    return
  }

  //Creating function to add events after form submission
  const addTask = (task) => {
    // console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };


  // Creating function to delete events when 'X' is clicked
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE'
    })

    // For checking purposes
    console.log("delete", id);

    // This will filter i.e not show the task id whose 'X' was clicked
    setTasks(tasks.filter((task) => task.id !== id));
  };


  // Function to change reminder class
  const toggleReminder = (id) => {
    console.log("Toggled reminder for ID: ", id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };



  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks present"
      )}
    </div>
  );
}

export default App;
