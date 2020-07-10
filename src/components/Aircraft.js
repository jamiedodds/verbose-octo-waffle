import React, { useState, useRef, useEffect } from "react";

import MaintenanceTask from "./MaintenanceTask";

function Aircraft({
  name,
  id,
  tasks,
  engineers,
  handleAddTask,
  toggleTask,
  deleteTask,
}) {
  const [showTasks, setShowTasks] = useState(false);
  const [chooseEngineer, setChooseEngineer] = React.useState();
  const taskNameRef = useRef();

  useEffect(() => {
    if (chooseEngineer === undefined) setChooseEngineer(engineers[0].name);
  }, [chooseEngineer, engineers]);

  const handleShowTasks = () => {
    setShowTasks(!showTasks);
  };

  const addTask = () => {
    handleAddTask(taskNameRef.current.value, id, chooseEngineer);
    taskNameRef.current.value = null;
  };

  return (
    <div>
      <h3>{name}</h3>

      <button onClick={handleShowTasks}>
        {showTasks ? "Hide Tasks" : "Show Tasks"}
      </button>
      <input
        ref={taskNameRef}
        type="text"
        placeholder="Enter Task Description"
      />

      <select
        value={chooseEngineer}
        onChange={(e) => setChooseEngineer(e.currentTarget.value)}
      >
        {engineers.map((engineer) => (
          <option key={engineer.id} value={engineer.name}>
            {engineer.name}
          </option>
        ))}
      </select>

      <button onClick={addTask}>Add Task</button>
      {showTasks
        ? tasks.map((task) => {
            return (
              <MaintenanceTask
                key={task.id}
                taskName={task.taskName}
                aircraftId={id}
                taskId={task.id}
                checked={task.checked}
                choosenEngineer={task.engineer}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            );
          })
        : null}
      <p>
        {tasks.filter((task) => !task.checked).length} tasks left to complete.
      </p>
    </div>
  );
}

export default Aircraft;
