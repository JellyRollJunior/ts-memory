import { useEffect, useState } from 'react';
import { z } from 'zod';
import { giphyArraySchema } from '../schemas/giphy.schema';
import { requestGifs } from '../services/request';

const useGiphy = (query = 'sailor moon', limit = 12) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<z.infer<typeof giphyArraySchema> | null>(null);

    useEffect(() => {
        // abort controller later
        // const abortController = new AbortController();
        const fetchGifs = async () => {
            requestGifs(query, limit);
            setIsLoading(false);
            setError(null);
            setData(null);
        };

        fetchGifs();
    }, [query, limit]);

    return { isLoading, error, data };
};

export { useGiphy };
