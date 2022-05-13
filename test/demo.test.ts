//link kata:
//https://kata-log.rocks/mars-rover-kata

/* eslint-disable @typescript-eslint/camelcase */
import  { Point } from "../src/point";
import { Rover } from "../src/rover";
import {World} from "../src/World";

let world;
beforeEach(() => {
     world = new World(10, 10);
});

describe("Rover", () => {
    describe("Forward Should", () => {


        test("given a rover with an started point and direction (N), when receive a forward command, then the y position change", () => {
            const initPos= new Point(4,5);
            const commands = ["f"];

            const rover = new Rover(initPos, "N", world);
            rover.executeCommands(commands);

            expect(rover.currentPosition.y).toBe(initPos.y - 1);
        });


        test("given a rover with an started point and direction (N), when receive more than one forward command, then the y position change", () => {
            const initPos= new Point(4,5);
            const commands = ["f", "f"];

            const rover = new Rover(initPos, "N", world);
            rover.executeCommands(commands);

            expect(rover.currentPosition.y).toBe(initPos.y - 2);
        });

        test("given a rover with an started point and direction (S), when receive more than one forward command, then the y position change", () => {
            const initPos= new Point(3,6);
            const commands = ["f", "f"];

            const rover = new Rover(initPos, "S", world);
            rover.executeCommands(commands);

            expect(rover.currentPosition.y).toBe(initPos.y + 2);
        });

        test("given a rover with an started point and direction (E), when receive more than one forward command, then the x position change", () => {
            const initPos= new Point(3,6);
            const commands = ["f", "f", "f"];

            const rover = new Rover(initPos, "E", world);
            rover.executeCommands(commands);

            expect(rover.currentPosition.x).toBe(initPos.x + 3);
        });

        test("given a rover with an started point and direction (W), when receive more than one forward command, then the x position change", () => {
            const initPos= new Point(3,6);
            const commands = ["f", "f", "f"];

            const rover = new Rover(initPos, "W", world);
            rover.executeCommands(commands);

            expect(rover.currentPosition.x).toBe(initPos.x - 3);
        });

    });

    describe("Backward Should", () => {
        test("given a rover with an started point and direction (N), when receive a backward command, then the y position change", () => {
            const initPos= new Point(4,5);
            const commands = ["b"];

            const rover = new Rover(initPos, "N", world);
            rover.executeCommands(commands);

            expect(rover.currentPosition.y).toBe(initPos.y + 1);
        });


        test("given a rover with an started point and direction (N), when receive more than one backward command, then the y position change", () => {
            const initPos= new Point(4,5);
            const commands = ["b", "b"];

            const rover = new Rover(initPos, "N", world);
            rover.executeCommands(commands);

            expect(rover.currentPosition.y).toBe(initPos.y + 2);
        });

        test("given a rover with an started point and direction (S), when receive more than one backward command, then the y position change", () => {
            const initPos= new Point(3,6);
            const commands = ["b", "b"];

            const rover = new Rover(initPos, "S", world);
            rover.executeCommands(commands);

            expect(rover.currentPosition.y).toBe(initPos.y - 2);
        });

        test("given a rover with an started point and direction (E), when receive more than one backward command, then the x position change", () => {
            const initPos= new Point(3,6);
            const commands = ["b", "b", "b"];

            const rover = new Rover(initPos, "E", world);
            rover.executeCommands(commands);

            expect(rover.currentPosition.x).toBe(initPos.x - 3);
        });

        test("given a rover with an started point and direction (W), when receive more than one backward command, then the x position change", () => {
            const initPos= new Point(3,6);
            const commands = ["b", "b", "b"];

            const rover = new Rover(initPos, "W", world);
            rover.executeCommands(commands);

            expect(rover.currentPosition.x).toBe(initPos.x + 3);
        });

    });

    describe("turn left Should", () => {
        test("given a rover with an started point and direction (N), when receive a left command, the direction must change", () => {
            const initPos= new Point(4,5);
            const commands = ["l"];

            const rover = new Rover(initPos, "N", world);
            rover.executeCommands(commands);

            expect(rover.currentDirection).toBe("W");
        });

        test("given a rover with an started point and direction (W), when receive a left command, the direction must change", () => {
            const initPos= new Point(4,5);
            const commands = ["l"];

            const rover = new Rover(initPos, "W", world);
            rover.executeCommands(commands);

            expect(rover.currentDirection).toBe("S");
        });

        test("given a rover with an started point and direction (S), when receive a left command, the direction must change", () => {
            const initPos= new Point(4,5);
            const commands = ["l"];

            const rover = new Rover(initPos, "S", world);
            rover.executeCommands(commands);

            expect(rover.currentDirection).toBe("E");
        });

        test("given a rover with an started point and direction (E), when receive a left command, the direction must change", () => {
            const initPos= new Point(4,5);
            const commands = ["l"];

            const rover = new Rover(initPos, "E", world);
            rover.executeCommands(commands);

            expect(rover.currentDirection).toBe("N");
        });
    });

    describe("turn right Should", () => {
        test("given a rover with an started point and direction (N), when receive a right command, the direction must change", () => {
            const initPos= new Point(4,5);
            const commands = ["r"];

            const rover = new Rover(initPos, "N", world);
            rover.executeCommands(commands);

            expect(rover.currentDirection).toBe("E");
        });

        test("given a rover with an started point and direction (E), when receive a right command, the direction must change", () => {
            const initPos= new Point(4,5);
            const commands = ["r"];

            const rover = new Rover(initPos, "E", world);
            rover.executeCommands(commands);

            expect(rover.currentDirection).toBe("S");
        });

        test("given a rover with an started point and direction (S), when receive a right command, the direction must change", () => {
            const initPos= new Point(4,5);
            const commands = ["r"];

            const rover = new Rover(initPos, "S", world);
            rover.executeCommands(commands);

            expect(rover.currentDirection).toBe("W");
        });

        test("given a rover with an started point and direction (W), when receive a right command, the direction must change", () => {
            const initPos= new Point(4,5);
            const commands = ["r"];

            const rover = new Rover(initPos, "W", world);
            rover.executeCommands(commands);

            expect(rover.currentDirection).toBe("N");
        });
    });

    describe('Limit', () => {
        test.skip('foo', () => {
            const initPos= new Point(0,0);
            const initDirection = "N";
            const rover = new Rover(initPos, initDirection, world);

            const commands = ["f"];
            rover.executeCommands(commands);

            expect(rover.currentPosition.y).toBe(9);

        });
    });


    });
