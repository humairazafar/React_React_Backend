//import Dependencies 

const express = require('express')
const cors = require("cors")

//import json files

const projects = require("./projects.json");
const about = require("./about.json");

//Create our app object

const app = express();

//set up middleware
app.use(cors());

//home route for testing our app
app.get("/", (req, res) => {
    res.send("Hello World");
});

//route for retrieving projects
app.get("/projects", (req, res) => {
    //send projects via json
    res.json(projects);
});

//Route for retrieving about info

app.get("/about", (req, res) => {
    //send about jason file
    res.json(about);
});

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

//turn on the server listener
app.listen(PORT, () => console.log(`listening on port ${PORT}`));