const express = require('express');
const {createNotesController,getAllNotesController,getNoteByIdController,updateNoteByIdController, deleteNoteByIdController} = require("../controllers/note.controller");

const router = express.Router();

router.post("/create",createNotesController);
router.get("/getAll",getAllNotesController);
router.get("/:id",getNoteByIdController);
router.put("/:id",updateNoteByIdController);
router.delete("/:id",deleteNoteByIdController);


module.exports = router;