import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import Aircraft from "./Aircraft";

function Aircrafts() {
  const [aircrafts, setAircrafts] = useState([]);
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
  const aircraftNameRef = useRef();

  const handleAddAircraft = () => {
    const aircraftName = aircraftNameRef.current.value;
    if (aircraftName === "") return;
    setAircrafts((prevProps) => {
      return [...prevProps, { id: uuidv4(), name: aircraftName, tasks: [] }];
    });
    aircraftNameRef.current.value = null;
  };

  const handleAddTask = (value, id, engineer) => {
    console.log(value, id);
    setAircrafts(
      aircrafts.map((aircraft) => {
        if (aircraft.id !== id) return aircraft;
        return {
          ...aircraft,
          tasks: [
            ...aircraft.tasks,
            {
              taskName: value,
              id: uuidv4(),
              engineer: engineer,
              checked: false,
            },
          ],
        };
      })
    );

    console.log(aircrafts);
  };

  function deleteTask(aircraftId, id) {
    console.log(id);
    const newAircrafts = [...aircrafts];
    const aircraft = newAircrafts.find(
      (aircraft) => aircraft.id === aircraftId
    );
    const newTasks = aircraft.tasks.filter((tasks) => id !== tasks.id);
    console.log(aircraft.tasks.id);
    setAircrafts(newAircrafts);
  }

  function toggleTask(aircraftId, id) {
    const newAircrafts = [...aircrafts];
    const aircraft = newAircrafts.find(
      (aircraft) => aircraft.id === aircraftId
    );
    const task = aircraft.tasks.find((task) => task.id === id);
    task.checked = !task.checked;
    setAircrafts(newAircrafts);
  }

  return (
    <div>
      <h2>Add an Aircraft for maintenance</h2>
      <input
        ref={aircraftNameRef}
        type="text"
        placeholder="Enter name of aircraft for maintenance"
      />
      <button onClick={handleAddAircraft}>Submit</button>
      {aircrafts.map((aircraft) => (
        <Aircraft
          key={aircraft.id}
          id={aircraft.id}
          name={aircraft.name}
          tasks={aircraft.tasks}
          engineers={engineers}
          handleAddTask={handleAddTask}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default Aircrafts;
