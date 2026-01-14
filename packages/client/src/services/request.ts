import { resolveError } from '@/errors/resolveError';

const makeRequest = async (endpoint: string, options: RequestInit) => {
    const response = await fetch(endpoint, options);
    // handle errors
    if (!response.ok) {
        const json = await response.json();
        const resolvedError = resolveError(json);
        throw resolvedError;
    }
    return response.json();
};

export { makeRequest };
