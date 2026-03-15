const noteService = require("./notes.service");

/**
 * Endpoint handler for creating a new note.
 * Expects title, content, workspace, and project in request body.
 * Owner is automatically set from the authenticated user.
 */
const createNote = async (req, res) => {
    try {
        const { title, content, workspace, project } = req.body;
        const owner = req.user.id;
        const note = await noteService.createNote(title, content, workspace, project, owner);
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

/**
 * Endpoint handler for fetching all notes.
 * Supports filtering by workspace and project via query parameters.
 */
const getAllNotes = async (req, res) => {
    try {
        const { workspace, project } = req.query;
        const owner = req.user.id;
        const notes = await noteService.getAllNotes(workspace, project, owner);
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

/**
 * Endpoint handler for getting a single note by ID.
 */
const getNoteById = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await noteService.getNoteById(id);
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

/**
 * Endpoint handler for updating a note.
 * Maintains ownership by overriding the owner field with authenticated user ID.
 */
const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, workspace, project } = req.body;
        const owner = req.user.id;
        const note = await noteService.updateNote(id, { title, content, workspace, project, owner });
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

/**
 * Endpoint handler for deleting a note.
 */
const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await noteService.deleteNote(id);
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote
};