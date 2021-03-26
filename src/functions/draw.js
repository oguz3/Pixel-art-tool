// Canvas üzerinde cizim yapıyoruz
export default function draw(canvas, ctx, e, row, coll, cellSize, item, color, colorKey, canvasToCode) {
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
        //Her yeni renk kodu alınıp yazıldığında buna bir key verip color arayına atmalı ve matrix arayinin icine bu keyi yazmalı
        //Her renk seçildiğinde yeni keykodu atıyor ama en son secilen rengi değil palet içineki her harekette yeni keyKod+1 yaptığı için 
        //çok yüksek sayılara gidiyor
        let hasColor=false;
        canvasToCode.color.map((item) => {
            if(String(item.color) === String(color)){ hasColor=true; }
        })
        if(!hasColor){canvasToCode.color.push({key: colorKey, color: color});}
        canvasToCode.matrix[posY/15][posX/15] = colorKey;
    }else if(item === 'eraser'){
        ctx.clearRect(posX, posY, cellSize, cellSize);
        canvasToCode.matrix[posY/15][posX/15] = 0;
    }
}

function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}