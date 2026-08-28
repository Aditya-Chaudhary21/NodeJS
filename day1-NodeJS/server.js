let http = require("http");

let server = http.createServer((req,res)=>{
    res.end("here is response");
});

server.listen(3000,()=>{
    console.log("server is listening on  3000");
});