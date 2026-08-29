const express = require('express');
const {getNotesController,createNoteController,getNoteByIdController,updateNoteByIdController,deleteNoteByIdController} = require("/Users/lakshaychaudhary/Desktop/NodeJS-main/day6-notesApp/src/controllers/notes.controllers.js")

const router = express.Router();

//get all notes
router.get("/getNotes",getNotesController);

//create note
router.post("/createNote",createNoteController);

//get note by id
router.get("/:id",getNoteByIdController);

//update note by id
router.put("/:id",updateNoteByIdController);

//delete note by id
router.delete("/:id", deleteNoteByIdController);

module.exports = router;