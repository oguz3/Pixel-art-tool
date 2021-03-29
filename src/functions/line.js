// Canvas üzerinde cizim yapıyoruz
export default function cizgi(canvas, ctx, start, last, row, coll, cellSize, color) {
    let startPos = getMousePos(canvas, start, row, coll, cellSize);
    let lastPos = getMousePos(canvas, last, row, coll, cellSize);

    ctx.fillStyle = color;
    ctx.fillRect (startPos.x, startPos.y, cellSize, cellSize);
    let size = (lastPos.x - startPos.x)/cellSize;

    for(let i=0; i<Math.abs(size); i++){
        if(size < 0){
            ctx.fillRect (startPos.x+(cellSize*-i), startPos.y+(cellSize*-i), cellSize, cellSize);
        }else{
            ctx.fillRect (startPos.x+(cellSize*i), startPos.y+(cellSize*i), cellSize, cellSize);
        }
    }
}

function getMousePos(canvas, location, row, coll, cellSize) {
    var rect = canvas.getBoundingClientRect();
    let pos = {
        x: location.x - rect.left,
        y: location.y - rect.top
    }
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
    return {
        x: posX,
        y: posY
    };
}