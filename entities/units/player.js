import { Unit } from "../unit.js";
import { keys } from "../../utils/inputKey.js";

export class Player extends Unit{
    constructor() {
        super(new Int16Array([100, 100]),100,400,350,"./assets/imgs/teemo.jpg")
    }
    update(dt) {
        this.movement(dt);
    }

    movement(dt) {
        const moveAmount = this.speed * (dt ?? 1);

        if ((keys["a"] || keys["arrowleft"]) && keys["shift"]) {
            this.x -= moveAmount * 1.5;
        } else if (keys["a"] || keys["arrowleft"]) {
            this.x -= moveAmount;
        }
        if ((keys["d"] || keys["arrowright"]) && keys["shift"]) {
            this.x += moveAmount * 1.5;
        } else if (keys["d"] || keys["arrowright"]) {
            this.x += moveAmount;
        }

        if ((keys["w"] || keys["arrowup"]) && keys["shift"]) {
            this.y -= moveAmount * 1.5;
        } else if (keys["w"] || keys["arrowleft"]) {
            this.y -= moveAmount;
        }
        if (keys["s"] || keys["arrowDown"])  this.y += moveAmount;
        
        this.x = Math.max(60, Math.min(this.x, 615));
    }
}
//613.3450000000004, 400