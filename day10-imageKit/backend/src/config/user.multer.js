const multer = require("multer");

//disk storage
// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"uploads/");
//     },
//     fileName:(req,file,cb)=>{
//         cb(null,Date.now() + "-" + file.originalname);
//     },
// });


//memory storage 
const memoryStorage = multer.memoryStorage();

const upload = multer({storage:memoryStorage})

module.exports = upload;