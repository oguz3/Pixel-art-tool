import { SETROW, SETCOLL, SETITEM } from "../actions/index";

const INITIAL_STATE = {
    row: 124,
    coll: 55,
    activeItem: 'pencil',
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SETROW:
        return {
            ...state,
            row: action.payload
        };
    case SETCOLL:
        return {
            ...state,
            coll: action.payload
        };
    case SETITEM:
        return {
            ...state,
            activeItem: String(action.payload)
        };
    default:
      return state;
  }
};