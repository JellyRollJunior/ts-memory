import { describe, it, expect, vi } from "vitest";
import request from "supertest";
import { app } from "@/app.js";
import { winnerResponseSchema } from "@/schemas/winner.schema.js";

vi.mock("@/db/winner.queries.ts", () => ({
    getWinners: () => [
        {
            id: 'I should not be exposed to client!',
            name: "oosahgee",
            datetime: new Date(),
        },
    ],
}));

describe("GET /winners", () => {
    it("returns a list of winners", async () => {
        const response = await request(app).get("/winners");

        // verify response body is array of winners
        let result = winnerResponseSchema.array().safeParse(response.body)
        expect(result.success).toBe(true);
    });
});
