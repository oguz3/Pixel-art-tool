import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux';
import drawMatrix from '../functions/drawMatrix';
import draw from '../functions/draw';

function Canvas(props){
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    drawMatrix(context, props.row, props.coll, props.cellSize);

    canvas.addEventListener('click', (e) => {
      draw(canvas, context, e, props.row, props.coll, props.cellSize)
    });

  }, [props.row, props.coll, props.cellSize])
  
  return (
    <canvas 
        ref={canvasRef} 
        width={15*props.row} 
        height={15*props.coll}
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