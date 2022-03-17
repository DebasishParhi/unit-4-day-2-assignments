const express = require("express")
const  {scripts}=require("./package.json")
// console.log(scripts)
const app = express()

app.get("/root",function(req,res){
    res.send("Hello User")
})

app.get("/books",function(req,res){

   res.send(scripts)

})

app.listen(5000,()=>{
    console.log("Connecting to the Server")
});