const express=require("express");
const x=require("dotenv").config();
console.log(x);
const dbConnect=require("./config/connectDB");
//instance pour les méthodes express
const app=express() 

//connect DB
dbConnect();
//middlware routing body parser,parse body request
app.use(express.json());

//create route
app.use("/api/contact",require("./routes/contacts"));


//variable d'environnement Port
const PORT=process.env.PORT 
//creation serveur
app.listen(PORT,(err)=>
err?console.error(err):console.log("server is running"))