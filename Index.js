//const express = require('express');
//const {MongoClient}=require("mongodb")
import express from "express";
import {MongoClient} from "mongodb";
import dotenv from"dotenv"

dotenv.config()
//console.log(process.env)
const app = express();
app.use(express.json())

//const PORT = 9000;
const PORT=process.env.PORT
app.get("/", (req, res) => {
  res.send("🙋🙋🙋this is cibi manoj heroku");
});
//const MONGO_URL = "mongodb://localhost";
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  console.log("mongo db is connected");
  await client.connect();
  return client;
}
const client = await createConnection();

app.get("/movies", async(request, response) => {
  //console.log(req.query);
  //const { language, rating } = request.query;
  //let filteredMovies = movies;
  
  //if (language) {
    //filteredMovies = filteredMovies.filter((mv) => mv.language === language);
 // }
 // if (rating) {
 //   filteredMovies = filteredMovies.filter((mv) => mv.rating === +rating);
 // }
 const filter=request.query;
 if(filter.rating){
   filter.rating= +filter.rating
   console.log(filter.rating);
 }
 const movies= await client.db("sample").collection("movies").find(filter).toArray()
  response.send(movies)
});
app.post("/movies",async(req, res)=>{
  const data=req.body
  console.log(data)
  const result =await client.db("sample").collection("movies").insertMany(data)
  res.send(result)
})
app.get("/movies/:id", async (request, response) =>{
  const { id } = request.params;
  const movie = await client
    .db("local")
    .collection("movies")
    .findOne({ id: id });
  console.log(movie);
  //console.log(id);
 
  movie? response.send(movie):response.status(404).send({ msg: "movie not found" });
});
app.listen(PORT, () => {
  console.log("server is connected", PORT);
});
