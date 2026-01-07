const origin =
    process.env.CORS_ORIGINS?.split(",")
        .map((origin) => origin.trim())
        .filter(Boolean) ?? [];

export { origin };
