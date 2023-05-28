// Step-1 :- importing the mongoose library...
const mongoose = require("mongoose");

// Step-2 :- defining the schema...
const authenticateSchema = mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

const authenticateDb = mongoose.model("authenticateDb", authenticateSchema);

module.exports = authenticateDb;
