const express = require("express");
const workspaceRoutes = express.Router();
const workspaceController = require("./workspace.controller");
const authMiddleware = require("../../core/middleware/auth.middleware");

workspaceRoutes.use(authMiddleware);

workspaceRoutes.post("/", workspaceController.createWorkspace);
workspaceRoutes.get("/", workspaceController.getWorkspaces);
workspaceRoutes.get("/:id", workspaceController.getWorkspaceById);
workspaceRoutes.put("/:id", workspaceController.updateWorkspace);
workspaceRoutes.delete("/:id", workspaceController.deleteWorkspace);

module.exports = workspaceRoutes;