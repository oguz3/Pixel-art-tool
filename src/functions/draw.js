// Canvas üzerinde cizim yapıyoruz
export default function draw(canvas, ctx, e, row, coll, cellSize, item, color) {
    let pos = getMousePos(canvas, e);
    let posX, posY;
    for(let i=0; i<row; i++){
      if(cellSize*i < pos.x){
          posX = cellSize*i;
      }
    }
    for(let j=0; j<coll; j++){
      if(cellSize*j < pos.y){
          posY = cellSize*j;
      }
    }
    ctx.fillStyle = color;
    if(item === 'pencil'){
        ctx.fillRect (posX, posY, cellSize, cellSize);
    }else if(item === 'eraser'){
        ctx.clearRect(posX, posY, cellSize, cellSize);
    }
}

function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}