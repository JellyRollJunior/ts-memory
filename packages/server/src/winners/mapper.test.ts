import { describe, it, expect } from "vitest";
import { mapWinnerToDto } from "./mapper.js";

describe("Winner database to dto mapper", () => {
    const DATABASE_WINNER = {
        id: "I am an ID",
        name: "This is my name!",
        datetime: new Date(),
    };
    const output = mapWinnerToDto(DATABASE_WINNER);
    
    it("returns an object with name and date matching the input", () => {
        expect(output.name).toEqual(DATABASE_WINNER.name);
        expect(new Date(output.datetime)).toEqual(DATABASE_WINNER.datetime);
    });

    it("returns an object without and id key", () => {
        expect(output).not.toHaveProperty('id')
    });

    it("returns an object with datetime as a string", () => {
        expect(output.datetime).toEqual(DATABASE_WINNER.datetime.toISOString());
    });
});
