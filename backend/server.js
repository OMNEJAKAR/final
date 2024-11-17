const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');  // To parse the body of POST requests
const { redirect } = require("react-router-dom");
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/employee');

dotenv.config();
const app = express();

const sessionConfig = {
    secret:'thisisnotagoodsecret',
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        expires:Date.now()+1000*60*60*24*7,
        maxAge:1000*60*60*24*7
    }


}
app.use(session(sessionConfig));

// Middleware to parse incoming JSON bodies
app.use(express.json());  // built-in middleware to parse JSON in POST requests
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect("mongodb://localhost:27017/volunteer")
    .then(() => console.log("connected to mongoose server successfully"))
    .catch(err => console.log("some error", err));

const isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        return res.status(401).json({ error: 'You must be signed in first!' });
    }
    next();
}

// const volunteerSchema = new mongoose.Schema({
//     name: {
//         type: String,
//     },
//     age:{
//         type:Number,
//     },
//     phone: {
//         type:Number,
//     },
//     email: {
//         type:String,
//     },
//     gender: {
//         type:String,
//     },
//     password:{
//         type : String
//     },
// });


// const Person = mongoose.model("volunteer", volunteerSchema);

app.get("/", async (req, res) => {

    res.send("done");

});

// app.post('/signup', async (req, res) => {
//     try {
//         const {name,age,phone,email,gender,password} = req.body;  // Get the 'name' from the body of the request

//         const newName = new Person({
//             name: name,
//             age:age,
//             phone:phone,
//             email:email,
//             gender:gender,
//             password:password,
//         });

//         await newName.save();  // Save the new name to the database
//         console.log(newName);

//         res.status(200).json({ message: 'Name added successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Failed to add name' });
//     }
// });

app.post('/register',async (req,res)=>{
    try{
        const {username,age,phone,email,gender,password} = req.body;  
        const employee = new User({username,age,phone,email,gender});
        const newEmployee = await User.register(employee,password);
        console.log(newEmployee);
        res.status(200).json({ message: 'Name added successfully' });
    }catch(e){
        console.log(e);
        res.status(500).json({ message: 'Failed to add name' });
    }
})

app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).json({ error: 'Authentication error' });
        }
        if (!user) {
            
            return res.status(401).json({ error: info.message });
        }
        
        req.logIn(user, (err) => {
            if (err) {
                return res.status(500).json({ error: 'Login failed' });
            }
            
            return res.status(200).json({ message: 'Login successful', user });
        });
    })(req, res, next);
});

// app.post("/login",async (req,res)=>
// {
//     const {name,password} = req.body;
//     const loggedPerson = await Person.find({username:username});
//     res.json(loggedPerson);
//     if(loggedPerson.length === 0) {
//         console.log("no user found");
//         redirect("/login");
//     }
//     console.log(loggedPerson);
// })
app.listen(5000, () => {
    console.log("server running at 5000 port");
});
