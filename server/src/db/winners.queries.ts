import type { Winner } from "../../generated/prisma/browser.js";
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/../generated/prisma/client.js";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const getWinners = async (): Promise<Winner[]> => {
    try {
        const data = await prisma.winner.findMany({
            orderBy: {
                datetime: "asc",
            },
        });
        return data;
    } catch (error) {
        throw error;
    }
};


export { getWinners };
