import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import Aircraft from "./Aircraft";
import "../css/aircrafts.css";
import * as actions from "../store/actions/aircrafts";

function Aircrafts() {
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

  const dispatch = useDispatch();

  const aircrafts = useSelector((state) => {
    return state.aircrafts;
  });

  const onAddAircraft = (aircraftName) => {
    dispatch(actions.addAircraft(aircraftName));
  };

  const onAddAircraftTask = (taskName, id, engineer) => {
    dispatch(actions.addAircraftTask(taskName, id, engineer));
  };

  const onToggleTask = (aircraftId, id) => {
    dispatch(actions.toggleAircraftTask(aircraftId, id));
  };

  const onDeleteTask = (aircraftId, id) => {
    dispatch(actions.deleteTask(aircraftId, id));
  };

  const handleAddAircraft = () => {
    const aircraftName = aircraftNameRef.current.value;
    if (aircraftName === "") return;
    onAddAircraft(aircraftName);
    aircraftNameRef.current.value = null;
  };

  const handleAddTask = (value, id, engineer) => {
    if (value === "") return;
    onAddAircraftTask(value, id, engineer);
  };

  function deleteTask(aircraftId, id) {
    onDeleteTask(aircraftId, id);
  }

  function toggleTask(aircraftId, id) {
    onToggleTask(aircraftId, id);
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
