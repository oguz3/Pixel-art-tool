// Burada okuduğumuz json dosyasını elimizdeki canvasa cizdiriyoruz
export default function uploadDraw(ctx, cellSize, data, canvasToCode) {
    let posX = 0;
    let posY = 0;
    data.matrix.map((x) => {
        x.map((y) => {
            if(y !== 0){
                data.color.map((color) => {
                    if(color.key === y){
                        ctx.fillStyle = color.color;
                        ctx.fillRect (posX, posY, cellSize, cellSize);
                    }
                })
            }
            posX += 15;
        })
        posY += 15;posX = 0;
    })

    // canvasa cizilen Pixel-art canvasToCode 'un icinede yazılıyor.
    canvasToCode.color = [];
    data.color.map((item) => {
        canvasToCode.color.push({key: item.key, color: item.color})
    })  
    for(let x=0; x<data.matrix.length; x++) {
        for(let y=0; y<data.matrix[x].length; y++) {
            canvasToCode.matrix[x][y] = data.matrix[x][y];
        }
    }
}