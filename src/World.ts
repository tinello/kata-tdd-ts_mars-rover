import {Point} from "./point";
import { Direction } from "./rover";

export class World {
    constructor(private x: number, private y: number) {

    }

    moveForward(currentPosition: Point, direction: string) {
        if (direction === Direction.Nort) { return  new Point(currentPosition.x, currentPosition.y - 1); }
        if (direction === Direction.South) { return new Point(currentPosition.x, currentPosition.y + 1); }
        if (direction === Direction.East) { return new Point(currentPosition.x + 1, currentPosition.y); }
        if (direction === Direction.West) { return  new Point(currentPosition.x - 1, currentPosition.y) }
    }
}
