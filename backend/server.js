const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');  // To parse the body of POST requests
const { redirect } = require("react-router-dom");

dotenv.config();
const app = express();

// Middleware to parse incoming JSON bodies
app.use(express.json());  // built-in middleware to parse JSON in POST requests
app.use(cors());

mongoose.connect("mongodb://localhost:27017/volunteer")
    .then(() => console.log("connected to mongoose server successfully"))
    .catch(err => console.log("some error", err));

const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age:{
        type:Number,
    },
    phone: {
        type:Number,
    },
    email: {
        type:String,
    },
    gender: {
        type:String,
    },
    password:{
        type : String
    },
});


const Person = mongoose.model("volunteer", volunteerSchema);

app.get("/", async (req, res) => {

    res.send("All fine");
});

app.post('/signup', async (req, res) => {
    try {
        const {name,age,phone,email,gender,password} = req.body;  // Get the 'name' from the body of the request

        const newName = new Person({
            name: name,
            age:age,
            phone:phone,
            email:email,
            gender:gender,
            password:password,
        });

        await newName.save();  // Save the new name to the database
        console.log(newName);

        res.status(200).json({ message: 'Name added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add name' });
    }
});
app.post("/login",async (req,res)=>
{
    const {name,password} = req.body;
    const loggedPerson = await Person.find({name:name});
    res.json(loggedPerson);
    if(loggedPerson.length === 0) {
        console.log("mo user found");
        redirect("/login");
    }
    console.log(loggedPerson);
})
app.listen(5000, () => {
    console.log("server running at 5000 port");
});
