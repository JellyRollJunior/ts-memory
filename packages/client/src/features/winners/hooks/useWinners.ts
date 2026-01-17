import type { Winner } from '@/features/winners/types.ts';
import { useCallback, useEffect, useState } from 'react';
import { fetchWinners as fetchWinnersApi } from '@/features/winners/api/winners.api';

const useWinners = () => {
    const [data, setData] = useState<Winner[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchWinners = useCallback(async () => {
        setIsLoading(true);
        try {
            const winners = await fetchWinnersApi();
            setData(winners);
            setError(null);
        } catch (error) {
            setError('Unable to fetch winners');
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchWinners();
    }, [fetchWinners]);

    return { data, isLoading, error };
};

export { useWinners };
