import express from "express";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 3000;

app.get('/' , (req,res) => {
    res.send("This is my home page");
})

app.listen(port, ()=>{
    console.log(`App is listening on port : ${port}`)
})