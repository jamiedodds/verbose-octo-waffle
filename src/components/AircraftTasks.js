import React, { useState, useRef } from "react";
import MaintenanceTask from "./MaintenanceTask";

function AircraftTasks({ aircraftTasks, toggleTask, deleteTask }) {
  return aircraftTasks.map((tasks) => {
    return (
      <MaintenanceTask
        tasks={tasks}
        key={tasks.id}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    );
  });
}

export default AircraftTasks;
