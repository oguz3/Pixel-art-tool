// Canvas üzerinde grid sistemini ciziyoruz

export default function drawMatrix(ctx, row, coll, cellSize) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for(let x=0; x<row; x++) {
        for(let y=0; y<coll; y++) {
            ctx.strokeStyle="gray";
            ctx.lineWidth = 0.1;
            ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
}