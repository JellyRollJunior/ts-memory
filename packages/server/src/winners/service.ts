import * as winnerQueries from "@/winners/queries.js";

const getWinners = async () => {
    const winners = await winnerQueries.getWinners();
    return winners;
};

const createWinner = async (name: string) => {
    const winner = await winnerQueries.createWinner(name);
    return winner;
};

export { getWinners, createWinner };
