const connection = require("../core/config/redis");
const { Queue } = require("bullmq");

/**
 * BullMQ Queue for AI analysis jobs.
 * Linked to the shared Redis connection.
 */
const aiQueue = new Queue("ai-analysis", { 
    connection, 
    defaultJobOptions: { 
        removeOnComplete: true, 
        removeOnFail: true 
    } 
});

// Prevent process crash on Redis connection failure
aiQueue.on("error", (err) => {
    console.warn("[AI Queue] Connection lost. Jobs will retry once Redis is back.");
});

module.exports = aiQueue;