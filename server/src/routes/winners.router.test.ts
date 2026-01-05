import request from "supertest";
import { app } from "@/app.js";
import { describe, it, expect, vi, beforeAll } from "vitest";
import { winnerResponseSchema } from "@/schemas/winner.schema.js";

// Mock fetching winners
vi.mock("@/db/winner.queries.js");
import * as winnerQueries from "@/db/winner.queries.js";
const mockedGetWinners = vi.mocked(winnerQueries.getWinners);
const mockedCreateWinner = vi.mocked(winnerQueries.createWinner);

describe("GET /winners route", () => {
    beforeAll(() => {
        mockedGetWinners.mockResolvedValue([
            {
                id: "This should not be exposed!",
                name: "oo-sah-gee",
                datetime: new Date(),
            },
        ]);
    });

    it("responds with 200 & JSON content type", async () => {
        const response = await request(app).get("/winners");

        expect(response.status).toBe(200);
        expect(response.headers["content-type"]).toMatch(/json/);
    });

    it("returns a list of winners", async () => {
        const response = await request(app).get("/winners");

        // verify response body is array of winners
        let result = winnerResponseSchema.array().safeParse(response.body);
        expect(result.success).toBe(true);
    });

    it("returns empty array when no winners exist", async () => {
        mockedGetWinners.mockResolvedValueOnce([]);
        const response = await request(app).get("/winners");
        expect(response.body).toEqual([]);
    });

    it("does not leak IDs", async () => {
        const response = await request(app).get("/winners");
        response.body.forEach((winner: any) => {
            expect(winner.id).toBeUndefined();
        });
    });
});
