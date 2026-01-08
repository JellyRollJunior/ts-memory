import type { Winner } from "@prisma/client";
import request from "supertest";
import { app } from "@/app.js";
import { describe, it, expect, vi, beforeAll } from "vitest";
import { winnerDataTransferObjectSchema } from "@/winners/dto.schema.js";

// Mock fetching winners
vi.mock("@/winners/queries.js");
import * as winnerQueries from "@/winners/queries.js";
import { Result } from "pg";
const mockedGetWinners = vi.mocked(winnerQueries.getWinners);
const mockedCreateWinner = vi.mocked(winnerQueries.createWinner);

const MOCK_USER = {
    id: "This should not be exposed!",
    name: "oo-sah-gee",
    datetime: new Date(),
};

describe("GET /winners route", () => {
    beforeAll(() => {
        mockedGetWinners.mockResolvedValue([MOCK_USER]);
    });

    it("responds with 200 & content type JSON", async () => {
        const response = await request(app).get("/winners");

        expect(response.status).toBe(200);
        expect(response.headers["content-type"]).toMatch(/json/);
    });

    it("returns a list of winners", async () => {
        const response = await request(app).get("/winners");

        const result = winnerDataTransferObjectSchema.array().safeParse(response.body);
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

describe("POST /winners route", () => {
    beforeAll(() => {
        mockedCreateWinner.mockResolvedValue(MOCK_USER);
    });

    it("responds with 200 & content type JSON", async () => {
        const response = await request(app)
            .post("/winners")
            .send({ name: "oo-sah-gee" });

        expect(response.status).toBe(200);
        expect(response.header["content-type"]).toMatch(/json/);
    });

    it("returns a winner", async () => {
        const response = await request(app)
            .post("/winners")
            .send({ name: "oo-sah-gee" });

        const result = winnerDataTransferObjectSchema.safeParse(response.body);
        expect(result.success).toBe(true);
    });

    it("does not leak IDs", async () => {
        const response = await request(app)
            .post("/winners")
            .send({ name: "oo-sah-gee" });

        const winner = response.body;
        expect(winner.id).toBeUndefined();
    });

    it("responds with 400 when name is not provided", async () => {
        const response = await request(app)
            .post("/winners")
            .send({ oops: "I forgot to put a name!" });
        expect(response.status).toBe(400);
    });

    it("responds with 400 when name contains special characters", async () => {
        const response = await request(app)
            .post("/winners")
            .send({ name: "SpecialCharacters: <>'\"" });
        expect(response.status).toBe(400);
    });

    it("responds with 400 when name.length < 1", async () => {
        const response = await request(app).post("/winners").send({ name: "" });
        expect(response.status).toBe(400);
    });

    it("responds with 400 when name.length > 16", async () => {
        const response = await request(app).post("/winners").send({
            name: "I am WAY over 16 characters don't allow me to enter!",
        });
        expect(response.status).toBe(400);
    });
});
