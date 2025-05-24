import {Player} from "../entities/units/player.js"


export class StartScene {
  player = new Player(); 
  
  start() {
    console.log("StartScene 시작");
  }

  update(dt) {
    this.player.update(dt);
  }

  /**@param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1920, 1080);
    ctx.fillText("Press Enter to Start", 300, 300);
    this.player.draw(ctx);
  }
}