import type { Winner } from "@prisma/client";
import { prisma } from "@/db/prisma.js";
import { ServerError } from "@/errors/ServerError.js";

const getWinners = async (): Promise<Winner[]> => {
    try {
        const data = await prisma.winner.findMany({
            orderBy: {
                datetime: "asc",
            },
        });
        return data;
    } catch (error) {
        throw new ServerError("Unable to fetch winners");
    }
};

const createWinner = async (name: string): Promise<Winner> => {
    try {
        const data = await prisma.winner.create({
            data: {
                name
            }
        });
        return data;
    } catch (error) {
        throw new ServerError('Unable to create winner')
    }
}

export { getWinners, createWinner };
