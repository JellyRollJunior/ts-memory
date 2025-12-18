import { useEffect, useState } from 'react';
import { requestGifs } from '../services/request';

const useGiphy = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<null>(null);

    useEffect(() => {
        // fetch data
        // setData
        const fetchGifs = async () => {
            requestGifs('sailor moon', 12);
            setIsLoading(false);
            setError(null);
            setData(null);
        }

        fetchGifs();
    }, []);

    return { isLoading, error, data };
};

export { useGiphy };
