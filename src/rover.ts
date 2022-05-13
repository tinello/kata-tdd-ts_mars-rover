import { Point } from "./point";
import { World } from "./World";

export enum Direction {
    Nort = "N",
    South = "S",
    East = "E",
    West = "W"
}

export class Rover {
    private _currentPosition: Point;
    private _direction: string

    constructor(private initPos: Point, private direction: string, private world: World) {
        this._currentPosition = initPos;
        this._direction = direction;
    }

    executeCommands(commands: string[]) {
        commands.forEach(command => {
            if (command ==='f') {
                this.moveForward();
            } else if (command === 'b') {
                this.moveBackward();
            } else if (command === 'l') {
                this.turnLeft();
            } else if (command === 'r') {
                this.turnRight();
            }
        });
    }

    private turnRight() {
        if (this._direction == Direction.Nort) {
            this._direction = Direction.East;
        } else if (this._direction == Direction.East) {
            this._direction = Direction.South;
        } else if (this._direction == Direction.South) {
            this._direction = Direction.West;
        } else if (this._direction == Direction.West) {
            this._direction = Direction.Nort;
        }
    }

    private turnLeft() {
        if (this._direction == Direction.Nort) {
            this._direction = Direction.West;
        } else if (this._direction == Direction.West) {
            this._direction = Direction.South;
        } else if (this._direction == Direction.South) {
            this._direction = Direction.East;
        } else if (this._direction == Direction.East) {
            this._direction = Direction.Nort;
        }
    }

    private moveForward() {

        this._currentPosition = this.world.moveForward(this._currentPosition, this._direction);

        /*
        if (this._direction === Direction.Nort) {
            this._currentPosition = new Point(this._currentPosition.x, this._currentPosition.y - 1);
        } else if (this._direction === Direction.South) {
            this._currentPosition = new Point(this._currentPosition.x, this._currentPosition.y + 1);
        } else if (this._direction === Direction.East) {
            this._currentPosition = new Point(this._currentPosition.x + 1, this._currentPosition.y);
        } else if (this._direction === Direction.West) {
            this._currentPosition = new Point(this._currentPosition.x - 1, this._currentPosition.y);
        }*/
    }

    private moveBackward() {
        if (this._direction === Direction.Nort) {
            this._currentPosition = new Point(this._currentPosition.x, this._currentPosition.y + 1);
        } else if (this._direction === Direction.South) {
            this._currentPosition = new Point(this._currentPosition.x, this._currentPosition.y - 1);
        } else if (this._direction === Direction.East) {
            this._currentPosition = new Point(this._currentPosition.x - 1, this._currentPosition.y);
        } else if (this._direction === Direction.West) {
            this._currentPosition = new Point(this._currentPosition.x + 1, this._currentPosition.y);
        }
    }

    get currentPosition() : Point {
        return this._currentPosition;
    }

    get currentDirection() : string {
        return this._direction;
    }
}
