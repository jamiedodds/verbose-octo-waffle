export const ADD_AIRCRAFT = "ADD_AIRCRAFT";
export const ADD_AIRCRAFT_TASK = "ADD_AIRCRAFT_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_AIRCRAFT_TASK = "DELETE_AIRCRAFT_TASK";

export const addAircraft = (name) => {
  return {
    type: ADD_AIRCRAFT,
    aircraftName: name,
  };
};

export const addAircraftTask = (name, id, engineer) => {
  return {
    type: ADD_AIRCRAFT_TASK,
    taskName: name,
    id: id,
    engineer: engineer,
  };
};

export const toggleAircraftTask = (aircraftId, taskId) => {
  return {
    type: TOGGLE_TASK,
    aircraftId: aircraftId,
    taskId: taskId,
  };
};

export const deleteTask = (aircraftId, id) => {
  return {
    type: DELETE_AIRCRAFT_TASK,
    aircraftId: aircraftId,
    taskId: id,
  };
};
