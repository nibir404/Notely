const aiQuery = require("../queues/ai.queue");

/**
 * Adds a note analysis job to the background queue.
 * Gracefully handles cases where Redis is unavailable.
 */
const analyzeNote = async (noteId, content) => {
    try {
        await aiQuery.add("analyzeNote", {
            noteId,
            content,
        });
        console.log(`[Job] Analysis job queued for note: ${noteId}`);
    } catch (error) {
        console.error(`[Job Error] Failed to queue analysis for note ${noteId}: ${error.message}`);
        // We don't throw here to avoid breaking the main request flow if background processing is down
    }
};

module.exports = analyzeNote;
