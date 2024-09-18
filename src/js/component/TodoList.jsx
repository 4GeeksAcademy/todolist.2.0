import React, { useState } from "react";


const TodoList = () => {
  
  const [name, setName] = useState('')
  const [tasks, setTasks] = useState([])

  // Función para manejar el input inicial
  const handleChange = (e) => {
    setName(e.target.value)
  }

//funcion para manejar la entrada del input 
  const changeInput = (e,index) => {
    // setName(e.target.value)
    const newTasks = [...tasks];
    newTasks[index] = e.target.value;
    setTasks(newTasks)
  } 

 // Función para agregar un nuevo input cuando presionas "Enter"
 const handleKeyDown = (e, index) => {
  if (e.key === 'Enter' && tasks[index].trim() !== '') {
    e.preventDefault();
    setTasks([...tasks, '']);
  }
}


  const addTask = () => {
    if(name.trim() !== '') {
      setTasks([...tasks, name]);
      setName('');
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className="col">
      <input type='text' value={name} onChange={handleChange} placeholder="Escribe una tarea" className="form-control"/>
      <button onClick={addTask} className="btn btn-primary m-2">Agregar</button>
      
      </div>
      
      </div>
      <ul>
      {tasks.map((task, index) => (
          <li key={index}>
            <input 
              type="text" 
              value={task} 
              onChange={(e) => changeInput(e, index)} 
              onKeyDown={(e) => handleKeyDown(e, index)} // Detectar Enter
              className="form-control"
              placeholder="Escribe una tarea"
            />
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default TodoList
