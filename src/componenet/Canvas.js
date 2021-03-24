import React, { useRef, useEffect } from 'react'
import drawMatrix from '../functions/drawMatrix';

function Canvas({row, coll}){
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    drawMatrix(context, row, coll);
  }, [row, coll])
  
  return <canvas ref={canvasRef} width={15*row} height={15*coll}/>
}

export default Canvas