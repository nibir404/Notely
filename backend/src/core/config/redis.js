const Redis = require("ioredis");

const connection = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    db: process.env.REDIS_DB,
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
    enableOfflineQueue: false,
    retryStrategy: (times) => {
        // Retry limited times to avoid infinite noise if Redis is intentionally off
        if (times > 3) return null; 
        const delay = Math.min(times * 50, 2000);
        return delay;
    },
});

connection.on("error", (err) => {
    console.warn("[Redis] Connection error. Background jobs will be disabled until Redis is available.");
});

module.exports = connection;