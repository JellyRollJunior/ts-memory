import { describe, it, expect, vi } from "vitest";
import request from "supertest";
import { app } from "@/app.js";
import { winnerResponseSchema } from "@/schemas/winner.schema.js";

vi.mock("@/db/winner.queries.ts", () => ({
    getWinners: () => [
        {
            id: "swag",
            name: "swag",
            datetime: new Date(),
        },
    ],
}));

describe("GET /winners", () => {
    // responds with json

    it("returns a list of winners", async () => {
        const response = await request(app).get("/winners");

        // verify response body is array of winners
        let isWinners = true;
        for (const winner of response.body) {
            isWinners =
                isWinners && winnerResponseSchema.safeParse(winner).success;
        }

        expect(isWinners).toBe(true);
    });
});
