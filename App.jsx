import { useState } from "react";
import "./App.css"
function App() {
const [tasks,setTasks] = useState ([]);
const[input,setInput] = useState("");

function addTask(event) {
 event.preventDefault(); 
setTasks([...tasks,input]); 
setInput("");
   }
 function deleteTask(index) {
  setTasks(tasks.filter((task, i) => i !== index));
 }
  function completeTask(index) {
  const newTasks = [...tasks];
  newTasks[index] = "✅ " + newTasks[index];
  setTasks(newTasks);
}
   return (
   <div className="todo">
  <h1>Todo list</h1>
   <form onSubmit={addTask}>
   <input
   type="text"
   value={input}
    onChange={(event) => setInput(event.target.value)}
    />
    <button type="submit">Add</button>
 </form>
 <ul>
  {tasks.map((task,index) => (
 <li key={index}
 >{task}
 <button onClick={()=> completeTask(index)}>Complete</button>
 <button onClick={() => deleteTask(index)}>Delete</button>
 </li>
  ))}
 </ul>
   </div> 
   );
  } 
   export default App;
  