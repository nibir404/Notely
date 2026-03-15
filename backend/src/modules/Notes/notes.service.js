const noteModel = require("./notes.model");
const analyzeNote = require("../../jobs/analyzeNote.job");

/**
 * Creates a new note in the database.
 * @param {string} title - The title of the note.
 * @param {string} content - The markdown or text content of the note.
 * @param {string} workspace - The ID of the workspace.
 * @param {string} project - The ID of the project.
 * @param {string} owner - The ID of the user creating the note.
 * @returns {Promise<Object>} The created note document.
 */
const createNote = async (title, content, workspace, project, owner) => {
    const note = await noteModel.create({ title, content, workspace, project, owner });
    await analyzeNote(note._id, content);
    return note;
}

/**
 * Retrieves all notes based on workspace, project, and owner filters.
 * @param {string} workspace - Workspace filter.
 * @param {string} project - Project filter.
 * @param {string} owner - Owner ID filter.
 * @returns {Promise<Array>} List of notes.
 */
const getAllNotes = async (workspace, project, owner) => {
    return await noteModel.find({ workspace, project, owner }).populate("owner", "name email");
}

/**
 * Retrieves a single note by its database ID.
 * @param {string} id - The note ID.
 * @returns {Promise<Object>} The note document.
 */
const getNoteById = async (id) => {
    return await noteModel.findById(id);
}

/**
 * Updates an existing note.
 * @param {string} id - The note ID.
 * @param {Object} note - The fields to update.
 * @returns {Promise<Object>} The updated note document.
 */
const updateNote = async (id, note) => {
    const updatedNote = await noteModel.findByIdAndUpdate(id, note, { new: true });
    await analyzeNote(id, note.content);
    return updatedNote;
}

/**
 * Removes a note from the database.
 * @param {string} id - The note ID.
 * @returns {Promise<Object>} The deleted note document.
 */
const deleteNote = async (id) => {
    return await noteModel.findByIdAndDelete(id);
}

/**
 * Retrieves paginated notes for a specific project.
 * @param {string} projectId - The project ID.
 * @param {number} cursor - The number of records to skip.
 * @param {number} [limit=20] - Maximum records to return.
 * @param {string} owner - The ID of the user.
 * @returns {Promise<Array>} List of project-specific notes.
 */
const getProjectNotes = async (projectId, cursor, limit = 20, owner) => {
    return await noteModel.find({ project: projectId, owner }).sort({ createdAt: -1 }).skip(cursor).limit(limit);
}

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
    getProjectNotes
};