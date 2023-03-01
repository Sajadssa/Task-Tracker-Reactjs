// import all components and files is here

import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
 


function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "JavaScript",
        day: "Feb 5th at 2:50pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Reactjs ",
        day: "Feb 5th at 4:50pm",
        reminder: true,
      },
      {
        id: 3,
        text: "python",
        day: "Feb 5th at 7:50pm",
        reminder: false,
      },
    ]);
  // ADD TASK
  const addTask = (task) => {
    const id=Math.floor(Math.random()*10000)+1;
    console.log(id)
  }
  // the most important rule in react:
  // where that define state shall be define action at that place
  // DElETE TASK
  const deleteTask = (id) => {
    // console.log('delete', id);
    // use of filter method ES6 for delete specified task
    setTasks(tasks.filter(task => task.id !== id));
  }
  // toggle reminder 
  const toggleReminder = (id) => {
    // console.log('reminder',id)
    //use of map method for iterate over state that is an array of object that recognize which id do doubleClick
    // if reminder property was true so to be false state
    // and inverse true=false or false=true
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
  }

    // className is an attribute for div tag that we style to an elements
    return(
    <div className='container'>
      {/* render all components is here and return JSX stand for:javaScript and xhtml that is mean combination html and javaScript syntax's
        we remove initialize default JSX for specify our projects*/}
        {/* pass argument or props here is title to component */}
        <Header />
        <AddTask onAad={ addTask} />
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />:"No Task to show"}
         
    </div>
  );
}

export default App;
