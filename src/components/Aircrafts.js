import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import Aircraft from "./Aircraft";
import "../css/aircrafts.css";

function Aircrafts() {
  const [aircrafts, setAircrafts] = useState([]);
  const [engineers, setEngineers] = useState([
    {
      id: uuidv4(),
      name: "Jack Shephard",
    },
    {
      id: uuidv4(),
      name: "Kate Austen",
    },
    {
      id: uuidv4(),
      name: "Hugo Reyes",
    },
    {
      id: uuidv4(),
      name: "James Ford",
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
    if (value === "") return;
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
  };

  function deleteTask(aircraftId, id) {
    const newAircrafts = [...aircrafts];
    const aircraft = newAircrafts.find(
      (aircraft) => aircraft.id === aircraftId
    );
    const newTasks = aircraft.tasks.filter((tasks) => id !== tasks.id);
    setAircrafts(
      aircrafts.map((aircraft) => {
        if (aircraft.id !== aircraftId) return aircraft;
        return {
          ...aircraft,
          tasks: newTasks,
        };
      })
    );
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
    <div className="aircrafts">
      <h1 className="main-title">Oceanic Airlines Flight Maintenance</h1>
      <h2 className="add-aircraft-title">Add an Aircraft for maintenance</h2>
      <div className="aircraft-entry">
        <input
          ref={aircraftNameRef}
          type="text"
          placeholder="Enter name of aircraft for maintenance"
        />
        <button onClick={handleAddAircraft}>Submit</button>
      </div>
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
