import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import drawMatrix from '../functions/drawMatrix';
import uploadDraw from '../functions/uploadDraw';
import draw from '../functions/draw';

function Canvas(props){
  const canvasRef = useRef(null)
  const gridCanvasRef = useRef(null)
  const contextRef = useRef(null)
  const[isDown, setIsDown] = useState(false);
  
  useEffect(() => {
    //cizim yapacağımız canvas
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    contextRef.current = context;
    //grid sistemini cizeceğimiz canvas
    const gridCanvas = gridCanvasRef.current
    const gridContext = gridCanvas.getContext('2d')
    //gridCanvas'a grid sistemini cizdiriyoruz
    props.canvasToCode.matrix = [];
    drawMatrix(gridContext, props.row, props.coll, props.cellSize, props.canvasToCode.matrix);
    let data = {
      "color": [
        { "key": 1, "color": "#000000" },
        { "key": 24, "color": "#fa1e1e" },
        { "key": 2, "color": "#94b715" }
      ],
      "matrix": [
        [1, 0, 1, 0, 24],
        [0, 1, 0, 24, 0],
        [0, 0, 1, 0, 0],
        [0, 24, 0, 1, 0],
        [24, 0, 2, 0, 1]
      ]
    }    
    uploadDraw(context, props.cellSize, data, props.canvasToCode)
  }, [props.row, props.coll, props.cellSize])

  const mouseDown = (e) => {
    setIsDown(true);
    drawCanvas(e)
  }
  const mouseUp = (e) => {
    drawCanvas(e)
    setIsDown(false);
  }
  const drawCanvas = (e) => {
    if(isDown === true){
      draw(canvasRef.current, contextRef.current, e, props.row, props.coll, props.cellSize, props.activeItem, props.color, props.colorKey, props.canvasToCode)
    }
  }
  
  return (
    <span>
      <canvas 
        ref={canvasRef}
        width={15*props.row}
        height={15*props.coll}
        onMouseMove={(e) => drawCanvas(e)}
        onMouseDown={(e) => mouseDown(e)}
        onMouseUp={(e) => mouseUp(e)}
      />
      <canvas 
          className={`gridCanvas ${props.hiddenGrid ? 'hiddenGrid' : 'showGrid'}`}
          ref={gridCanvasRef}
          width={15*props.row}
          height={15*props.coll}
          onMouseMove={(e) => drawCanvas(e)}
          onMouseDown={(e) => mouseDown(e)}
          onMouseUp={(e) => mouseUp(e)}
      />
    </span>
  );
}

const mapStateToProps = (state) => {
  return {
      row: state.row,
      coll: state.coll,
      color: state.color,
      colorKey: state.colorKey,
      cellSize: state.cellSize,
      activeItem: state.activeItem,
      hiddenGrid: state.hiddenGrid,
      canvasToCode: state.canvasToCode,
  };
};

export default connect(mapStateToProps)(Canvas);