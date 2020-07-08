import React, { useState, useRef } from "react";

function Aircraft({ name, id, handleAddTask }) {
  const [showTasks, setShowTasks] = useState(false);
  const taskNameRef = useRef();

  const handleShowTasks = () => {
    setShowTasks(!showTasks);
  };

  const addTask = () => {
    handleAddTask(taskNameRef.current.value, id);
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
      <button onClick={addTask}>Add Task</button>
      {showTasks ? (
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
      ) : null}
    </div>
  );
}

export default Aircraft;
