// Step-1:- importing the mongoose lirary...
const mongoose = require("mongoose");

// Step-2 :- Connecting your app to your local database...
mongoose.connect("mongodb://127.0.0.1:27017/Authenticate_db");

// Step-3 :- Checking if it's connected or not...
const db = mongoose.connection;

// If it isn't connected :-
db.on(
  "error",
  console.error.bind(console, "There is some error in connecting to the db...")
);

// If it is connected successfully :-
db.once("open", () => {
  console.log("You'hv been connected to the db successfully...");
});

module.exports = db;
