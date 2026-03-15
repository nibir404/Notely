const noteService = require("./notes.service");

/**
 * Endpoint handler for creating a new note.
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
 * Endpoint handler for fetching notes.
 * If a project ID is provided, it uses paginated project note fetching.
 * Otherwise, it returns notes based on user ownership.
 */
const getAllNotes = async (req, res) => {
    try {
        const { workspace, project, cursor, limit } = req.query;
        const owner = req.user.id;

        if (project) {
            const notes = await noteService.getProjectNotes(project, parseInt(cursor) || 0, parseInt(limit) || 20, owner);
            return res.status(200).json(notes);
        }

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