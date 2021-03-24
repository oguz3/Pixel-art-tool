// Canvas üzerinde grid sistemini ciziyoruz

export default function drawMatrix(ctx, row, coll) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let cellWidth = 15;
    let cellHeight = 15;
    for(let x=0; x<row; x++) {
        for(let y=0; y<coll; y++) {
            ctx.strokeStyle="gray";
            ctx.lineWidth = 0.1;
            ctx.strokeRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
        }
    }
}