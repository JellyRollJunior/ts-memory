type ResponseError = Error & {
    status: number;
    name: string;
};

export type { ResponseError };
