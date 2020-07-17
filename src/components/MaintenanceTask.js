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
    <div className="tasks">
      <input
        className="checkbox"
        type="checkbox"
        name={taskName}
        checked={checked}
        onChange={handleTaskClick}
      />
      <label className="task-name">
        {taskName}, work to be carried out by {choosenEngineer}
      </label>
      <button className="delete-task" onClick={handleDeleteTask}>
        Delete
      </button>
    </div>
  );
}
