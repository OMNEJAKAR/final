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
const Review = require('./models/review');
const Employer = require('./models/employer');

dotenv.config();
const app = express();

const sessionConfig = {
    secret: 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
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

const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ error: 'You must be signed in first!' });
    }
    next();
}



app.get("/", async (req, res) => {

    res.send("done");

});


app.post('/register', async (req, res) => {
    try {
        const { username, age, phone, email, gender, password, isRetailer } = req.body;
        const employee = new User({ username, age, phone, email, gender,isEmployer:isRetailer});
        const newEmployee = await User.register(employee, password);
        console.log(newEmployee);
        if (isRetailer) {
            const { retailerDetails } = req.body;
            const employer = new Employer({ orgName: retailerDetails.orgName, Address: retailerDetails.address, Aadhaar: retailerDetails.aadhaarNo, Profession: retailerDetails.profession,user:newEmployee})
            await employer.save();                       
        }
   
        
  
        res.status(200).json({ message: 'Name added successfully' });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Failed to add name' });
    }
})

app.post('/reviews', async (req, res) => {
    const { employeeName, rating, comments } = req.body;
    const employee = await User.findOne({ username: employeeName });
    console.log(employee);
    const review = new Review({
        name: employeeName,
        rating: rating,
        comment: comments
    })
    console.log(review);
    await review.save();
    employee.reviews.push(review);
    console.log(employee);
    await employee.save();

    // console.log("Received data:", req.body);

    res.status(200).json({ message: "Review saved successfully!" });

})

app.get('/reviews/:username', async (req, res) => {
    try {
        console.log(req.params.username);
        console.log("ok");
        // Use 'await' to resolve the promise
        const employee = await User.findOne({ username: req.params.username }).populate('reviews');

        // Check if the user exists
        if (!employee) {
            return res.status(404).json({ message: 'User not found' });
        }
        // console.log(employee);
        res.json(employee); // Send the resolved data

    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.get('/profile/:username', async (req, res) => {
    try {
        console.log(req.params.username);

        // Use 'await' to resolve the promise
        const employee = await User.findOne({ username: req.params.username });

        // Check if the user exists
        if (!employee) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(employee);
        res.json(employee); // Send the resolved data
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.put('/profile/:username',async (req,res)=>{
    try{
    const {username,address,description,email,profession,phone} = req.body;
    const employee = await User.findOneAndUpdate({username:req.params.username},
        {username,address,description,email,profession,email}
    );
    if (!employee) {
        return res.status(404).json({ message: 'User not found' });
    }
    console.log(employee);
    }catch(e){
        console.log("Error");
        console.log(e);
    }

})



app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).json({ error: 'Authentication error' });
        }
        if (!user) {
            console.log(info.message);
            return res.status(401).json({ error: info.message });
        }

        req.logIn(user, (err) => {
            if (err) {
                return res.status(500).json({ error: 'Login failed' });
            }
            console.log(user);
            return res.status(200).json({ message: 'Login successful', user });
        });
    })(req, res, next);
});



app.listen(5000, () => {
    console.log("server running at 5000 port");
});
