const express = require("express");
const router = express.Router();
const insightController = require("./insight.controller");
const authMiddleware = require("../../core/middleware/auth.middleware");

// All insight routes are protected
router.use(authMiddleware);

router.post("/", insightController.createInsight);
router.get("/", insightController.getAllInsights);
router.get("/:id", insightController.getInsightById);
router.put("/:id", insightController.updateInsight);
router.delete("/:id", insightController.deleteInsight);

module.exports = router;
