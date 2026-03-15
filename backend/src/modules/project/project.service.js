const Project = require("./project.model");

/**
 * Creates a new project in the database.
 * @param {string} title - The title of the project.
 * @param {string} description - The project description.
 * @param {string} workspace - The ID of the workspace this project belongs to.
 * @param {string} owner - The ID of the user who owns the project.
 * @returns {Promise<Object>} The saved project document.
 */
const createProject = async (title, description, workspace, owner) => {
    const project = new Project({ title, description, workspace, owner });
    return await project.save();
};

/**
 * Retrieves all projects for a specific workspace.
 * @param {string} workspace - The ID of the workspace.
 * @returns {Promise<Array>} List of projects.
 */
const getProjects = async (workspace) => {
    return await Project.find({ workspace });
};

/**
 * Retrieves a single project by its ID.
 * @param {string} id - The project ID.
 * @returns {Promise<Object>} The project document.
 */
const getProjectById = async (id) => {
    return await Project.findById(id);
};

/**
 * Updates an existing project.
 * @param {string} id - The project ID.
 * @param {string} title - Updated title.
 * @param {string} description - Updated description.
 * @param {string} workspace - The workspace ID.
 * @param {string} owner - The owner ID.
 * @returns {Promise<Object>} The updated project document.
 */
const updateProject = async (id, title, description, workspace, owner) => {
    return await Project.findByIdAndUpdate(id, { title, description, workspace, owner }, { new: true });
};

/**
 * Deletes a project from the database.
 * @param {string} id - The project ID.
 * @returns {Promise<Object>} The deleted project document.
 */
const deleteProject = async (id) => {
    return await Project.findByIdAndDelete(id);
};

module.exports = {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
};