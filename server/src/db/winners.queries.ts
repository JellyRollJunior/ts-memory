import type { Winner } from "@root/generated/prisma/browser.js";
import { prisma } from "@/db/prisma.js";

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
