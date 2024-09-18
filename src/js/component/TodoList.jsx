import React, { useState } from "react";

const TodoList = () => {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);

  // Función para manejar el input inicial
  const handleChange = (e) => {
    setName(e.target.value);
  };

  //funcion para manejar la entrada del input
  const changeInput = (e, index) => {
    // setName(e.target.value)
    const newTasks = [...tasks];
    newTasks[index] = e.target.value;
    setTasks(newTasks);
  };

  // Función para agregar un nuevo input cuando presionas "Enter"
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && name.trim() !== "") {
      // Solo si hay texto en el input
      e.preventDefault();
      setTasks([...tasks, name]); // Agrega la tarea actual
      setName(""); // Limpia el input
    }
  };

  const addTask = () => {
    if (name.trim() !== "") {
      setTasks([...tasks, name]);
      setName("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container d-flex justify-counter-center">
      <div className="row">
        <div className="col">
          <input
            type="text"
            value={name}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Escribe una tarea"
            className="form-control"
          />

         
        </div>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="text"
              value={task}
              onChange={(e) => changeInput(e, index)}
              className="form-control"
              placeholder="Escribe una tarea"
            />
            <button
              onClick={() => deleteTask(index)}
              className="btn btn-danger m-2"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
