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

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  //Funcion para borrar todas las tareas
  const deleteAllTasks = () => {
    setTasks([]); 
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5 position-relative">
      <div className="row w-100 pt-2">
        <div className="col">
          <input
            type="text"
            value={name}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Write your homework here"
            className="form-control w-95 pt-2"
          />
        </div>
      </div>
      <ul className="list-group w-95 pt-2 mt-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center w-100 pt-2"
          >
            <input
              type="text"
              value={task}
              onChange={(e) => changeInput(e, index)}
              className="form-control w-100 pt-2"
              placeholder="Write your homework"
            />
            <button
              onClick={() => deleteTask(index)}
              className="btn btn-white m-2"
            >
              x
            </button>
          </li>
        ))}
      </ul>
      {tasks.length > 0 && (
        <button onClick={deleteAllTasks} className="btn btn-danger w-95 mt-3">
          Delete all tasks
        </button>
      )}
      <footer className="task-counter bg-light text-dark w-100 p-2 text-start mt-3">
        {tasks.length} {tasks.length === 0 ? "There are no pending tasks" : "Pending tasks"}
      </footer>
    </div>
  );
};

export default TodoList;
