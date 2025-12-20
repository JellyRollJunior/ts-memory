import { useCallback, useEffect, useState } from 'react';
import { z } from 'zod';
import { giphyArraySchema } from '../schemas/giphy.schema';
import { isResponseError } from '../services/responseError';
import { requestGifs } from '../services/request';

const useGiphy = (query = 'sailor moon', limit = 12) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<z.infer<typeof giphyArraySchema> | null>(null);

    const fetchGifs = useCallback(async () => {
        setIsLoading(true);
        try {
            const gifArray = await requestGifs(query, limit);
            setData(gifArray);
            setError(null);
        } catch (error) {
            if (isResponseError(error)) {
                setError(error.message);
            } else if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Unable to fetch gifs');
            }
        } finally {
            setIsLoading(false);
        }
    }, [query, limit]);

    useEffect(() => {
        // abort controller later
        // const abortController = new AbortController();
        fetchGifs();
    }, [fetchGifs]);

    const refetchGifs = () => {
        fetchGifs();
    };

    return { isLoading, error, data, refetchGifs };
};

export { useGiphy };
