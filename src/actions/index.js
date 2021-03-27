export const SETROW = "SETROW";
export const SETCOLL = "SETCOLL";
export const SETITEM = "SETITEM";
export const SETGRID = "SETGRID";
export const SETCOLOR = "SETCOLOR";
export const SETIMGDATA = "SETIMGDATA";
export const SETUPLOADIMG = "SETUPLOADIMG";
export const SETISUPLOAD = "SETISUPLOAD";

export const setRow = (number) => {
  return { type: SETROW, payload: number };
};

export const setColl = (number) => {
  return { type: SETCOLL, payload: number };
};

export const setItem = (item) => {
  return { type: SETITEM, payload: item };
};

export const setGrid = (item) => {
  return { type: SETGRID, payload: item };
};

export const setColor = (item) => {
  return { type: SETCOLOR, payload: item };
};

export const setImgdata = (item) => {
  return { type: SETIMGDATA, payload: item };
};

export const setUploadImg = (item) => {
  return { type: SETUPLOADIMG, payload: item };
};

export const setIsUpload = (item) => {
  return { type: SETISUPLOAD, payload: item };
};