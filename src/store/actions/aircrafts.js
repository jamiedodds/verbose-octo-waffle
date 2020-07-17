export const ADD_AIRCRAFT = "ADD_AIRCRAFT";

export const addAircraft = (name) => {
  return {
    type: ADD_AIRCRAFT,
    aircraftName: name,
  };
};
