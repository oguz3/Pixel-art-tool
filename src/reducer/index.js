import { SETROW, SETCOLL, SETITEM, SETGRID, SETCOLOR } from "../actions/index";

const INITIAL_STATE = {
    cellSize: 15,
    row: 20,
    coll: 20,
    hiddenGrid: false,
    activeItem: 'pencil',
    color: '#000000',
    colorKey: 1,
    canvasToCode: {
        color: [{key: 1, color: '#000000'}],
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
            color: action.payload,
            colorKey: parseInt(state.colorKey)+1
        };
    default:
      return state;
  }
};