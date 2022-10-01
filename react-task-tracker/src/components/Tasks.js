import Task from "./Task";

const Tasks = ({ tasks }) => {
    return (
        <>
        {/* We can map the task list using the map function */}
            {tasks.map((task) => (
                <Task key={task.id} task={task}/>
            ))}
        </>
    );
};

export default Tasks;
