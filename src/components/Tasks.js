// use of useState Hook for show data
 
import Task from "./Task";
 
// passing props to Tasks component
const Tasks = ({ tasks, onDelete, onToggle }) => {
    
    
    
    
    return (
    //   use fragment for parent element wrapper
        
    <>
            {/* for show all tasks in DOM we access to tasks and iterate over an array by method map or forEach */}
        {tasks.map(task => <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />)}
            {/* render separate in new component */}
    </>
  )
}

export default Tasks;

