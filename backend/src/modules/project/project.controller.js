const projectService = require("./project.service");

/**
 * Handles the creation of a new project.
 * Extracts project details from request body and owner ID from authenticated user.
 */
const createProject = async (req, res) => {
    try {
        const { title, description, workspace } = req.body;
        const owner = req.user.id; // Assigned from authMiddleware
        const project = await projectService.createProject(title, description, workspace, owner);
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Retrieves projects filtered by workspace ID.
 * Workspace ID is expected in query parameters.
 */
const getProjects = async (req, res) => {
    try {
        const { workspace } = req.query;
        const projects = await projectService.getProjects(workspace);
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Retrieves a specific project by its ID from URL parameters.
 */
const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await projectService.getProjectById(id);
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Updates project details.
 * Ensures the owner field is maintained from the authenticated user.
 */
const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, workspace } = req.body;
        const owner = req.user.id;
        const project = await projectService.updateProject(id, title, description, workspace, owner);
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Deletes a project by its unique ID.
 */
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await projectService.deleteProject(id);
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
};