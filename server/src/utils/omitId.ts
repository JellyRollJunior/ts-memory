const omitId = <T extends { id: unknown }>(input: T): Omit<T, "id"> => {
    const { id, ...filtered } = input;
    return filtered;
};

export { omitId };
