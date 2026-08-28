const express = require('express');
const app = express();

app.use(express.json());

const users = []

// get - read
app.get("/",(req,res)=>{
    res.send(users);
})

// post - create
app.post("/create",(req,res)=>{
    const body = req.body;
    users.push(body);
    res.send("user created successfully");

});
//delete - delete
app.delete("/delete/:id",(req,res)=>{
    const {id} = req.params;
    const newData = users.filter((user)=>user.id !== id);
    console.log(newData);
    res.send(newData);
});


//update - put
app.put("/update/:id",(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const updatedUsers = users.map((val)=> val.id === id ? {...val , name} : val);
    res.send(updatedUsers);
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`);
})