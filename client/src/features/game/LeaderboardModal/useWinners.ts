import { useState } from 'react';

const useWinners = () => {
    const [winners, setWinners] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getWinners = async () => {};
};

export { useWinners };
