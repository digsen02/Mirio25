export class Button{
    /**@param {Int16Array} size  */
    constructor(size,x,y,imageUrl) {
        this.size = size;
        this.x = x;
        this.y = y;
        this.img = new Image();
        this.img.src = imageUrl;
    }
    /**@param {CanvasRenderingContext2D} ctx */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.size[0],this.size[1]);
    }

}