const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');  // To parse the body of POST requests

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
    }
});

const Person = mongoose.model("person", volunteerSchema);

app.get("/", async (req, res) => {
    const volunteer1 = new Person({
        name: "omkar"
    });
    // await volunteer1.save();

    const volunteer2 = new Person({
        name: "nixon"
    });
    // await volunteer2.save();

    res.send("All fine");
});

app.post('/aboutus', async (req, res) => {
    try {
        const {name} = req.body;  // Get the 'name' from the body of the request

        const newName = new Person({
            name: name,
        });

        await newName.save();  // Save the new name to the database
        console.log(newName);

        res.status(200).json({ message: 'Name added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add name' });
    }
});

app.listen(5000, () => {
    console.log("server running at 5000 port");
});
