import React from "react";

export default function MaintenanceTask({
  taskName,
  aircraftId,
  taskId,
  checked,
  choosenEngineer,
  toggleTask,
  deleteTask,
}) {
  function handleTaskClick() {
    toggleTask(aircraftId, taskId);
  }

  function handleDeleteTask() {
    deleteTask(aircraftId, taskId);
  }

  return (
    <div>
      <input
        type="checkbox"
        name={taskName}
        checked={checked}
        onChange={handleTaskClick}
      />
      <label>
        {taskName}, work to be carried out by {choosenEngineer}
      </label>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
}
