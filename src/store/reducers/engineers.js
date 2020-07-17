import { v4 as uuidv4 } from "uuid";

const initialState = {
  engineers: [
    {
      id: uuidv4(),
      name: "Jack Shephard",
    },
    {
      id: uuidv4(),
      name: "Kate Austen",
    },
    {
      id: uuidv4(),
      name: "Hugo Reyes",
    },
    {
      id: uuidv4(),
      name: "James Ford",
    },
  ],
};

const engineerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE:

    default:
      return state;
  }
};

export default engineerReducer;
