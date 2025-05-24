export class Unit {
    /**@param {Int16Array} size  */
    constructor(size,x,y,speed,imageUrl){
        this.size = size;
        this.x = x;
        this.y = y;
        this.vy = 0; 
        this.speed = speed;
        this.img = new Image();
        this.img.src = imageUrl;
        this.onGround = false;
    }
    /**@param {CanvasRenderingContext2D} ctx */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.size[0],this.size[1]);
    }
    update(dt) {

    }
}