const Insight = require("./insight.model");

/**
 * Creates a new AI insight for a note.
 * @param {Object} insight - The insight data (noteId, sentiment, pain points, etc.)
 * @returns {Promise<Object>} The saved insight document.
 */
const createInsight = async (insight) => {
    return await Insight.create(insight);
};

/**
 * Retrieves a specific insight by its unique ID.
 * @param {string} id - The insight ID.
 * @returns {Promise<Object>} The insight document.
 */
const getInsight = async (id) => {
    return await Insight.findById(id);
};

/**
 * Retrieves all generated insights.
 * @returns {Promise<Array>} List of all insights.
 */
const getInsights = async () => {
    return await Insight.find();
};

/**
 * Updates an existing insight.
 * @param {string} id - The insight ID.
 * @param {Object} insight - The updated data.
 * @returns {Promise<Object>} The updated insight document.
 */
const updateInsight = async (id, insight) => {
    return await Insight.findByIdAndUpdate(id, insight, { new: true });
};

/**
 * Deletes an insight from the record.
 * @param {string} id - The insight ID.
 * @returns {Promise<Object>} The deleted insight document.
 */
const deleteInsight = async (id) => {
    return await Insight.findByIdAndDelete(id);
};

module.exports = {
    createInsight,
    getInsight,
    getInsights,
    updateInsight,
    deleteInsight
};