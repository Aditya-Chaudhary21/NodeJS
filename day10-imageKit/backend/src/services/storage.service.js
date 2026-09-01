const imageKit = require("imagekit");
const dotenv = require("dotenv");
dotenv.config();

const storageInstance = new imageKit({
    urlEndpoint: process.env.URL_ENDPOINT,
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY
});
const uploadFile = async (file,fileName) => {
    const obj = {
        file:file,
        fileName:fileName,  
        folder:"userImage"
    }
    return await storageInstance.upload(obj);
}


module.exports = uploadFile;