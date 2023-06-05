// Require the library...
const mongoose = require("mongoose");

// Connect To the database
// mongodb+srv://pradhansubham147:9qfoanigHxsn7yVJ@cluster0.vhoryqe.mongodb.net/contacts_list_db
mongoose.connect("mongodb://127.0.0.1:27017/Contacts_list_db");

// Aquire the connections to check if the connection was successful
const db = mongoose.connection;

// Error
db.on("error", console.error.bind(console, "error connecting to db"));

// Up and Running then print the message
db.once("open", function () {
  console.log("Successfully connected to the db.");
});
