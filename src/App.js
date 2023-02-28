// import all components and files is here

import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
 


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

    // className is an attribute for div tag that we style to an elements
    return(
    <div className='container'>
      {/* render all components is here and return JSX stand for:javaScript and xhtml that is mean combination html and javaScript syntax's
        we remove initialize default JSX for specify our projects*/}
        {/* pass argument or props here is title to component */}
        <Header />
        <Tasks tasks={tasks} />
         
         
    </div>
  );
}

export default App;
