import type { Winner } from '@/features/winners/types.ts';
import { useState } from 'react';
import { postWinners } from '@/features/winners';

const useSubmitWinner = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const submitWinner = async (name: string): Promise<Winner | null> => {
        if (isLoading) return null;

        try {
            setIsLoading(true);
            setError(null);
            const winner = await postWinners(name);
            return winner;
        } catch (error) {
            setError('Unable to submit winner');
        } finally {
            setIsLoading(false);
        }
        return null;
    };
    return { submitWinner, isLoading, error };
};

export { useSubmitWinner };
