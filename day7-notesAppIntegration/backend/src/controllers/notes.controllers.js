const noteModel = require("../models/notes.model")

//get all notes
const getNotesController = async(req,res)=>{
    try{
        const notes = await noteModel.find();
        return res.status(200).json({
            message:"notes fetched successfully",
            data:notes
        })

    }catch(error){
        return res.status(500).json({
            message:"error occured while fetching notes",
        })
        
    }
}

//create note
const createNoteController = async(req,res)=>{
    try{
        const body = req.body;
        const note = await noteModel.create(body);
        return res.status(200).json({
            message:"note created successfully",
            data:note
        })
    }catch(error){
        return res.status(500).json({
            message:"error occured while creating note",
        })
    }
}

//get note by id
const getNoteByIdController = async(req,res)=>{
    try{
        const id = req.params.id;
        const note = await noteModel.findById(id);
        return res.status(200).json({
            message:"note fetched successfully",
            data:note
        })
    }catch(error){
        return res.status(500).json({
            message:"error occured while fetching note by id",
})
    }
}

//update note via put
const updateNoteByIdController = async(req,res)=>{
    try{
        const id = req.params.id;
        const body = req.body;
        const note = await noteModel.findByIdAndUpdate(id,body,{new:true});
        return res.status(200).json({
            message:"note updated successfully",
            data:note
        })
    }catch(error){
        return res.status(500).json({
            message:"error occured while updating note by id",
        })
    }
}

//update via patch
const updateSingleNoteController = async(req,res)=>{
    try {
        const id = req.params.id;
        const body = req.body;
        const note = await noteModel.findByIdAndUpdate(id,body,{new:true});
        return res.status(200).json({
            message:"note updated successfully",
            data:note
        })        
    } catch (error) {
        return res.status(500).json({
            message:"error occured while updating note by id",
        })
        
    }
}


//delete 
const deleteNoteByIdController = async(req,res)=>{
    try{
        const id = req.params.id;
        const note = await noteModel.findByIdAndDelete(id);
        return res.status(200).json({
            message:"note deleted successfully",
        })
    }catch(error){
        return res.status(500).json({
            message:"error occured while deleting note by id"
        })
    }
}

module.exports = {getNotesController, createNoteController,getNoteByIdController,updateNoteByIdController,deleteNoteByIdController,updateSingleNoteController };