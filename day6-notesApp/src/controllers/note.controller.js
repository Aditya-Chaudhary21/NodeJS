const NoteModel = require("../model/note.model");


//create note
const createNotesController = async(req,res)=>{
    try{
        const {title,description} = req.body;
        const newNote = await NoteModel.create({title,description});
        return res.status(201).json({
        message:"Note created successfully",
        data:newNote
    })
}    catch(error){
        return res.status(500).json({
        message:"Error while creating note",
        error:error.message
    })

}
}
//get all notes
const getAllNotesController = async(req,res)=>{
 try{
    const notes = await NoteModel.find();
    return res.status(200).json({
        message:"Notes fetched successfully",
        data:notes
    })
 }catch(error){
    return res.status(500).json({
        message:"Error while fetching notes",
        error:error.message
    })
 }
}
//get single note by id
const getNoteByIdController = async(req,res)=>{
    try{
        const noteId = req.params.id;
        const note = await NoteModel.findById(noteId);
        return res.status(200).json({
            message:"Note fetched successfully",
            data:note
        })
    }catch(error){
        return res.status(500).json({
            message:"Error while fetching note by id",
            error:error.message
        })
    }
}
//update note by id
const updateNoteByIdController = async(req,res)=>{
    try{
        const noteId = req.params.id;
        const body = req.body;
        const updatedNote = await NoteModel.findByIdAndUpdate(noteId,body,{new:true});
        return res.status(200).json({
            message:"Note updated successfully",
            data:updatedNote
        })
    }catch(error){
        return res.status(500).json({
            message:"Error while updating note by id",
            error:error.message
        })
    }
}
//delete note by id
const deleteNoteByIdController = async(req,res)=>{
    try{
        const noteId = req.params.id;
        const deletedNote = await NoteModel.findByIdAndDelete(noteId);
        return res.status(200).json({
            message:"Note deleted successfully",
            
        })
    }catch(error){
        return res.status(500).json({
            message:"Error while deleting note by id",
            error:error.message
        })
    }
}
module.exports =  {createNotesController,getAllNotesController,getNoteByIdController,updateNoteByIdController,deleteNoteByIdController};