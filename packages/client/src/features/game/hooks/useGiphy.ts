import { useCallback, useEffect, useState } from 'react';
import { z } from 'zod';
import { giphyArraySchema } from '@/features/game/schema';
import { isResponseError } from '@/errors/BaseError.ts';
import { fetchGifs as fetchGifsApi } from '@/features/game/api/giphy.api';

const useGiphy = (query = 'sailor moon', limit = 12) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<z.infer<typeof giphyArraySchema> | null>(null);

    const fetchGifs = useCallback(async () => {
        setIsLoading(true);
        try {
            const gifArray = await fetchGifsApi(query, limit);
            setData(gifArray);
            setError(null);
        } catch (error) {
            if (isResponseError(error)) {
                setError(error.message);
            } else if (error instanceof Error) {
                setError(error.message);
            } else if (error instanceof z.ZodError) {
                setError('Error with response schema: ' + z.treeifyError(error))
            } else {
                setError('Unable to fetch gifs');
            }
        } finally {
            setIsLoading(false);
        }
    }, [query, limit]);

    useEffect(() => {
        fetchGifs();
    }, [fetchGifs]);

    const refetchGifs = () => {
        fetchGifs();
    };

    return { isLoading, error, data, refetchGifs };
};

export { useGiphy };
