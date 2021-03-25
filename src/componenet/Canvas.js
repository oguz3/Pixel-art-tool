import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import drawMatrix from '../functions/drawMatrix';
import draw from '../functions/draw';

function Canvas(props){
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const[isDown, setIsDown] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    contextRef.current = context;
    drawMatrix(context, props.row, props.coll, props.cellSize);
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
      draw(canvasRef.current, contextRef.current, e, props.row, props.coll, props.cellSize)
    }
  }
  
  return (
    <canvas 
        ref={canvasRef}
        width={15*props.row}
        height={15*props.coll}
        onMouseMove={(e) => drawCanvas(e)}
        onMouseDown={(e) => mouseDown(e)}
        onMouseUp={(e) => mouseUp(e)}
    />
  );
}

const mapStateToProps = (state) => {
  return {
      row: state.row,
      coll: state.coll,
      cellSize: state.cellSize,
  };
};

export default connect(mapStateToProps)(Canvas);