export const SETROW = "SETROW";
export const SETCOLL = "SETCOLL";
export const SETITEM = "SETITEM";

export const setRow = (number) => {
  return { type: SETROW, payload: number };
};

export const setColl = (number) => {
  return { type: SETCOLL, payload: number };
};

export const setItem = (item) => {
    return { type: SETITEM, payload: item };
  };