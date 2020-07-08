import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function MaintenanceTask({ tasks, toggleTask, deleteTask }) {
  function handleTaskClick() {
    toggleTask(tasks.id);
  }

  function handleDeleteTask() {
    deleteTask(tasks.id);
  }

  return (
    <div>
      <input
        type="checkbox"
        name={tasks.name}
        checked={tasks.checked}
        onChange={handleTaskClick}
      />
      <label>
        {tasks.name}, work to be carried out by {tasks.engineer}
      </label>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
}
