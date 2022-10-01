import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
        {/* We can map the task list using the map function */}
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    );
};

export default Tasks;
