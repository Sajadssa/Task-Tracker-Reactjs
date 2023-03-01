// import react-icons
import {FaTimes} from 'react-icons/fa';


const Task = ({ task, onDelete, onToggle }) => {
  return (
    //use of ternary condition for apply reminder class style css
    <div className={`task ${task.reminder? 'reminder':''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3 key={task.id}>{task.text} <FaTimes  onClick={()=>onDelete(task.id)} style={{color:'red',cursor:'pointer'}}/></h3>
      <p>{task.day}</p>
      {/* for access to react icons first install it with syntax:npm i react-icons */}
      
    </div>
  );
};

export default Task;
  