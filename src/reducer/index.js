import { SETROW, SETCOLL, SETITEM, SETGRID, SETCOLOR } from "../actions/index";

const INITIAL_STATE = {
    cellSize: 15,
    row: 20,
    coll: 20,
    activeItem: 'pencil',
    color: '#000',
    hiddenGrid: false,
    canvasToCode: {
        color: [],
        matrix: []
    }
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
    case SETGRID:
        return {
            ...state,
            hiddenGrid: action.payload
        };
    case SETCOLOR:
        return {
            ...state,
            color: action.payload
        };
    default:
      return state;
  }
};