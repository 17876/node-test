// const express is a function
const express = require("express");

// express app
// express() ist a function which creates an instance of the app
const app = express();

// register view engine
// .set lets us configure some application settings
app.set("view engine", "ejs");

// middleware and static files
// in the folde public all files will be accessable at frontend.

// listen for requests
app.listen(3000); // retuns an instance of the server
// we can store in a constand but we dont have to

// get requests
app.get("/", (req, res) => {
    res.render("index");
});
