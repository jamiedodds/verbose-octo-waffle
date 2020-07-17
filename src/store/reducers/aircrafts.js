import { v4 as uuidv4 } from "uuid";
import { ADD_AIRCRAFT } from "../actions/aircrafts";

const initialState = {
  aircrafts: [],
};

const aircraftsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AIRCRAFT:
      return {
        ...state,
        aircrafts: [{ id: uuidv4(), name: action.aircraftName, tasks: [] }],
      };
    default:
      return state;
  }
};

export default aircraftsReducer;
