const express = require('express');

const {getNotesController,createNoteController,getNoteByIdController,updateNoteByIdController,deleteNoteByIdController,updateSingleNoteController } = require("../controllers/notes.controllers");

const router = express.Router();

//get all notes
router.get("/getNotes",getNotesController);

//create 
router.post("/createNote",createNoteController);

//get note by id
router.get("/:id",getNoteByIdController);

//update note by put 
router.put("/:id",updateNoteByIdController);

//update note by patch
router.patch("/:id/edit",updateSingleNoteController );

//delete note by id
router.delete("/:id", deleteNoteByIdController);

module.exports = router;