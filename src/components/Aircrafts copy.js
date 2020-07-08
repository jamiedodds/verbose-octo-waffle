import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import Aircraft from "./Aircraft";

function Aircrafts() {
  const [aircrafts, setAircrafts] = useState([]);
  const aircraftNameRef = useRef();

  const handleAddAircraft = () => {
    const aircraftName = aircraftNameRef.current.value;
    if (aircraftName === "") return;
    setAircrafts((prevProps) => {
      return [...prevProps, { id: uuidv4(), name: aircraftName, tasks: [{}] }];
    });
    aircraftNameRef.current.value = null;
  };

  const handleAddTask = (value, id) => {
    setAircrafts((prevProps) => {
      console.log(prevProps);
      prevProps.map((plane) => {
        console.log(plane);
        if (plane.id === id) {
          return [
            ...prevProps,
            { ...plane, tasks: [{ taskname: value, id: id }] },
          ];
        } else {
          return plane;
        }
      });
      // const aircraft = prevProps.find((aircraft) => aircraft.id === id);
    });
  };

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
          handleAddTask={handleAddTask}
        />
      ))}
    </div>
  );
}

export default Aircrafts;
