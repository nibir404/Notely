const Workspace = require("./workspace.model");

const createWorkspace = async (name, userId) => {
    const workspace = new Workspace({ name, userId });
    return await workspace.save();
}

const getWorkspaces = async (userId) => {
    return await Workspace.find({ userId }).populate("userId", "name email");
}

const getWorkspaceById = async (id) => {
    return await Workspace.findById(id).populate("userId", "name email");
}

const updateWorkspace = async (id, name) => {
    return await Workspace.findByIdAndUpdate(id, { name }, { new: true });
}

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