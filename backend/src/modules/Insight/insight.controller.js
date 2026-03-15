const insightService = require("./insight.service");

/**
 * Endpoint handler to manually create an insight (useful for testing or manual overrides).
 */
const createInsight = async (req, res) => {
    try {
        const insight = await insightService.createInsight(req.body);
        res.status(201).json(insight);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Endpoint handler to retrieve all AI insights.
 */
const getAllInsights = async (req, res) => {
    try {
        const insights = await insightService.getInsights();
        res.status(200).json(insights);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Endpoint handler to get a specific insight by its ID.
 */
const getInsightById = async (req, res) => {
    try {
        const { id } = req.params;
        const insight = await insightService.getInsight(id);
        if (!insight) return res.status(404).json({ message: "Insight not found" });
        res.status(200).json(insight);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Endpoint handler to update an insight.
 */
const updateInsight = async (req, res) => {
    try {
        const { id } = req.params;
        const insight = await insightService.updateInsight(id, req.body);
        res.status(200).json(insight);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Endpoint handler to delete an insight.
 */
const deleteInsight = async (req, res) => {
    try {
        const { id } = req.params;
        await insightService.deleteInsight(id);
        res.status(200).json({ message: "Insight deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createInsight,
    getAllInsights,
    getInsightById,
    updateInsight,
    deleteInsight
};
