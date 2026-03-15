const noteController = require("./notes.controller");
const authMiddleware = require("../../core/middleware/auth.middleware");
const express = require("express");
const router = express.Router();

router.use(authMiddleware);

router.post("/", noteController.createNote);
router.get("/", noteController.getAllNotes);
router.get("/:id", noteController.getNoteById);
router.put("/:id", noteController.updateNote);
router.delete("/:id", noteController.deleteNote);

module.exports = router;