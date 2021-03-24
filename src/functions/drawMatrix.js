// Canvas üzerinde grid sistemini ciziyoruz

export default function drawMatrix(ctx, row, coll) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let cellWidth = ctx.canvas.width / row;
    let cellHeight = ctx.canvas.height / coll;
    for(let x=0; x<row; x++) {
        for(let y=0; y<coll; y++) {
            ctx.strokeStyle="#000";
            ctx.strokeRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
        }
    }
}