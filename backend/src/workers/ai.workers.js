const { Worker } = require("bullmq");
const connection = require("../core/config/redis");
const Insight = require("../modules/Insight/insight.model");

/**
 * Worker to process note analysis jobs.
 * Uses a simulated AI logic to generate insights (sentiment, pain points, etc.)
 */
const worker = new Worker("ai-analysis", async (job) => {
    try {
        const { noteId, content } = job.data;
        console.log(`[AI Worker] Analyzing note ${noteId}...`);

        // Simulated AI analysis logic
        const sentiment = content.toLowerCase().includes("love") ? "Positive" : "Neutral";
        const pain_point = content.toLowerCase().includes("slow") ? "Performance issues" : "None identified";
        const featureRequest = content.toLowerCase().includes("need") ? "User requested new feature" : "None";
        
        const insight = await Insight.create({
            note: noteId,
            pain_point,
            featureRequest,
            sentiment,
            suggested_solution: "Review user feedback and prioritize in next sprint.",
        });

        console.log(`[AI Worker] Insight created for note ${noteId}`);
        return insight;
    } catch (error) {
        console.error(`[AI Worker] Failed to process job ${job.id}:`, error.message);
        throw error; // Re-throw to allow BullMQ fail handling
    }
}, { connection });

worker.on("error", (err) => {
    // Gracefully log connection issues without crashing the app
    if (err.message.includes("ECONNREFUSED")) {
        console.warn("[AI Worker] Redis unavailable. Background processing is suspended.");
    } else {
        console.error("[AI Worker] Internal Error:", err.message);
    }
});

module.exports = worker;