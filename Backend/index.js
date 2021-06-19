const express= require("express");
const path=require("path");
const fs =require("fs");
const app= express();
const port = 80;
const home= fs.readFileSync('main1.html');
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded());


app.get("/", (req,res)=>{
    res.end(home);
}) 
app.post("/",(req,res)=>{
    const name=req.body.Name;
    const time=req.body.Time;
    const Email=req.body.Email;
    const contact= req.body.Contact;
    const toOutput= `name : ${name}, time:${time},Email:${Email},Contact:${contact}`;
    fs.writeFileSync('output.txt',toOutput);
})
app.listen(port,()=>{
    console.log(`app started at port ${port}`);
})