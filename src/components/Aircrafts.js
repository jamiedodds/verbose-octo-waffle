import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import AircraftTasks from "./AircraftTasks";

function Aircrafts() {
  const [aircraftTasks, setAircrafts] = useState([]);
  const [aircraftTitle, setAircraftTitle] = useState("");
  const [engineers, setEngineers] = useState([
    {
      id: uuidv4(),
      name: "John Smith",
    },
    {
      id: uuidv4(),
      name: "Jon Snow",
    },
    {
      id: uuidv4(),
      name: "Arya Stark",
    },
    {
      id: uuidv4(),
      name: "Khal Drogo",
    },
  ]);
  const [value, setValue] = React.useState();
  const aircraftNameRef = useRef();
  const taskNameRef = useRef();

  useEffect(() => {
    if (value === undefined) setValue(engineers[0].name);
  }, [value]);

  const handleAircraftName = () => {
    const aircraftName = aircraftNameRef.current.value;
    setAircraftTitle(aircraftName);
  };

  function toggleTask(id) {
    const newTasks = [...aircraftTasks];
    const task = newTasks.find((task) => task.id === id);
    task.checked = !task.checked;
    setAircrafts(newTasks);
  }

  function deleteTask(id) {
    const newTasks = aircraftTasks.filter((task) => id !== task.id);
    setAircrafts(newTasks);
  }

  function handleAddTask(e) {
    const name = taskNameRef.current.value;
    const engineer = value;

    if (name === "") return;
    setAircrafts((prevTasks) => {
      return [
        ...prevTasks,
        { id: uuidv4(), name: name, engineer: engineer, checked: false },
      ];
    });
    taskNameRef.current.value = null;
  }

  function handleClearTasks() {
    const newTasks = aircraftTasks.filter((task) => !task.checked);
    setAircrafts(newTasks);
  }

  return (
    <div>
      <input
        ref={aircraftNameRef}
        type="text"
        placeholder="Enter name of aircraft for maintenance"
      />
      <button onClick={handleAircraftName}>Enter</button>
      <h2>{aircraftTitle}</h2>
      <AircraftTasks
        aircraftTasks={aircraftTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
      <input ref={taskNameRef} type="text" />
      <select value={value} onChange={(e) => setValue(e.currentTarget.value)}>
        {engineers.map((engineer) => (
          <option key={engineer.id} value={engineer.name}>
            {engineer.name}
          </option>
        ))}
      </select>
      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={handleClearTasks}>Clear Completed Todo's</button>
      <p>
        {aircraftTasks.filter((task) => !task.checked).length} tasks left to
        complete.
      </p>
    </div>
  );
}

export default Aircrafts;
