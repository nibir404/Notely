const express = require("express");
const projectRouter = express.Router();
const projectController = require("./project.controller");
const authMiddleware = require("../../core/middleware/auth.middleware");

projectRouter.use(authMiddleware);

projectRouter.post("/", projectController.createProject);
projectRouter.get("/", projectController.getProjects);
projectRouter.get("/:id", projectController.getProjectById);
projectRouter.put("/:id", projectController.updateProject);
projectRouter.delete("/:id", projectController.deleteProject);

module.exports = projectRouter;