const Workspace = require("./workspace.model");

/**
 * Creates a new workspace for a user.
 * @param {string} name - The name of the workspace.
 * @param {string} userId - The ID of the owner user.
 * @returns {Promise<Object>} The created workspace document.
 */
const createWorkspace = async (name, userId) => {
    const workspace = new Workspace({ name, userId });
    return await workspace.save();
}

/**
 * Retrieves all workspaces owned by a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Array>} List of user workspaces.
 */
const getWorkspaces = async (userId) => {
    return await Workspace.find({ userId }).populate("userId", "name email");
}

/**
 * Retrieves a single workspace by its ID.
 * @param {string} id - The workspace ID.
 * @returns {Promise<Object>} The workspace document.
 */
const getWorkspaceById = async (id) => {
    return await Workspace.findById(id).populate("userId", "name email");
}

/**
 * Updates an existing workspace.
 * @param {string} id - The workspace ID.
 * @param {string} name - The new name for the workspace.
 * @returns {Promise<Object>} The updated workspace document.
 */
const updateWorkspace = async (id, name) => {
    return await Workspace.findByIdAndUpdate(id, { name }, { new: true });
}

/**
 * Deletes a workspace by its ID.
 * @param {string} id - The workspace ID.
 * @returns {Promise<Object>} The deleted workspace document.
 */
const deleteWorkspace = async (id) => {
    return await Workspace.findByIdAndDelete(id);
}

module.exports = {
    createWorkspace,
    getWorkspaces,
    getWorkspaceById,
    updateWorkspace,
    deleteWorkspace
}