const workspaceService = require("./workspace.service");

const createWorkspace = async (req, res) => {
    try {
        const { name } = req.body;
        const userId = req.user.id;
        const workspace = await workspaceService.createWorkspace(name, userId);
        res.status(201).json(workspace);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getWorkspaces = async (req, res) => {
    try {
        const userId = req.user.id;
        const workspaces = await workspaceService.getWorkspaces(userId);
        res.status(200).json(workspaces);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getWorkspaceById = async (req, res) => {
    try {
        const { id } = req.params;
        const workspace = await workspaceService.getWorkspaceById(id);
        res.status(200).json(workspace);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateWorkspace = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const workspace = await workspaceService.updateWorkspace(id, name);
        res.status(200).json(workspace);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteWorkspace = async (req, res) => {
    try {
        const { id } = req.params;
        const workspace = await workspaceService.deleteWorkspace(id);
        res.status(200).json(workspace);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createWorkspace,
    getWorkspaces,
    getWorkspaceById,
    updateWorkspace,
    deleteWorkspace
}
