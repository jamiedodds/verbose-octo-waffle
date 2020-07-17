import { v4 as uuidv4 } from "uuid";
import {
  ADD_AIRCRAFT,
  ADD_AIRCRAFT_TASK,
  TOGGLE_TASK,
  DELETE_AIRCRAFT_TASK,
} from "../actions/aircrafts";

const initialState = {
  aircrafts: [],
};

const aircraftsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AIRCRAFT:
      return {
        ...state,
        aircrafts: [
          ...state.aircrafts,
          { id: uuidv4(), name: action.aircraftName, tasks: [] },
        ],
      };
    case ADD_AIRCRAFT_TASK:
      const aircrafts = state.aircrafts.map((aircraft) => {
        if (aircraft.id !== action.id) return aircraft;
        return {
          ...aircraft,
          tasks: [
            ...aircraft.tasks,
            {
              taskName: action.taskName,
              id: uuidv4(),
              engineer: action.engineer,
              checked: false,
            },
          ],
        };
      });
      return { ...state, aircrafts };
    case TOGGLE_TASK:
      const newAircrafts = [...state.aircrafts];
      const aircraft = state.aircrafts.find(
        (aircraft) => aircraft.id === action.aircraftId
      );
      const task = aircraft.tasks.find((task) => task.id === action.taskId);
      task.checked = !task.checked;

      return { ...state, aircrafts: newAircrafts };
    case DELETE_AIRCRAFT_TASK:
      const aircraftToDelte = state.aircrafts.find(
        (aircraft) => aircraft.id === action.aircraftId
      );
      const newTasks = aircraftToDelte.tasks.filter(
        (tasks) => action.taskId !== tasks.id
      );
      const deleteAircrafts = state.aircrafts.map((aircraft) => {
        if (aircraft.id !== action.aircraftId) return aircraft;
        return {
          ...aircraft,
          tasks: newTasks,
        };
      });

      return { ...state, aircrafts: deleteAircrafts };
    default:
      return state;
  }
};

export default aircraftsReducer;
