import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { setImgdata, setIsUpload, setRow, setColl } from '../actions';
import drawMatrix from '../functions/drawMatrix'
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
    drawMatrix(gridContext, props.row, props.coll, props.cellSize);
    props.setImgdata(canvasRef.current.toDataURL('image/png'))
  }, [props.row, props.coll, props.cellSize])

  useEffect(() => {
      if(props.isUpload){
        contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        var img = new Image();
        img.onload = function() {
          props.setRow(img.width/props.cellSize)
          props.setColl(img.height/props.cellSize)
          contextRef.current.drawImage(img, 0, 0);
          props.setImgdata(canvasRef.current.toDataURL('image/png'))
        };
        img.src = props.uploadImg;
        props.setIsUpload(false);
      }
  })

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
      draw(canvasRef.current, contextRef.current, e, props.row, props.coll, props.cellSize, props.activeItem, props.color)
      props.setImgdata(canvasRef.current.toDataURL('image/png'))
    }
  }

  return (
    <span>
      <canvas 
        ref={canvasRef}
        width={props.cellSize*props.row}
        height={props.cellSize*props.coll}
        onMouseMove={(e) => drawCanvas(e)}
        onMouseDown={(e) => mouseDown(e)}
        onMouseUp={(e) => mouseUp(e)}
      />
      <canvas 
          className={`gridCanvas ${props.hiddenGrid ? 'hiddenGrid' : 'showGrid'}`}
          ref={gridCanvasRef}
          width={props.cellSize*props.row}
          height={props.cellSize*props.coll}
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
      cellSize: state.cellSize,
      activeItem: state.activeItem,
      hiddenGrid: state.hiddenGrid,
      imgdata: state.imgdata,
      isUpload: state.isUpload,
      uploadImg: state.uploadImg,
  };
};

export default connect(mapStateToProps, { setImgdata, setIsUpload, setRow, setColl })(Canvas);