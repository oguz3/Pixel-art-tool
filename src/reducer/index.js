import { SETROW, SETCOLL, SETITEM, SETGRID, SETCOLOR, SETIMGDATA, SETUPLOADIMG, SETISUPLOAD } from "../actions/index";

const INITIAL_STATE = {
    cellSize: 20,
    row: 50,
    coll: 40,
    hiddenGrid: false,
    activeItem: 'pencil',
    color: '#000000',
    imgdata: null,
    uploadImg: null,
    isUpload: false,
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
        };
    case SETIMGDATA:
        return {
            ...state,
            imgdata: action.payload,
        };
    case SETUPLOADIMG:
        return {
            ...state,
            uploadImg: action.payload,
        };
    case SETISUPLOAD:
        return {
            ...state,
            isUpload: action.payload,
        };
    default:
      return state;
  }
};