import express from "express";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT;

app.get('/' , (req,res) => {
    res.send("This is my home page");
})

app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on port : ${port}`)
})