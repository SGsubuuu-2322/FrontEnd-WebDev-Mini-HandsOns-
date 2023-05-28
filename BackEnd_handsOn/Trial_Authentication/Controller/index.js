// Step-1 :- Importing express as web framework and defining port...
const express = require("express");
const port = "8000";
// defining and initialising path...
const path = require("path");

// Step-5 :- Importing the db and Schema model ...
const db = require("./config/mongoose");
const authenticateDb = require("./model/authenticate");

// Step-2 :- Initializing the express app...
const app = express();

// Some predefined middlewares...
app.use(express.urlencoded());

// Setting up the view engine as ejs...
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Step-4 :- Giving the response on the certain routes or router handling...
app.get("/", (req, res) => {
  return res.render("signup");
});

app.post("/register", async (req, res) => {
  try {
    if (req.body.password != req.body.confirmPassword) {
      console.log("Passwords aren't matching...");
      return res.redirect("back");
    } else {
      //   const data = await req.body.email;
      const mail = await authenticateDb.findOne({ email: req.body.email });
      if (mail) {
        console.log(
          "Sorry!!! this mail is already exists, try with new one..."
        );
        return res.redirect("back");
      } else {
        authenticateDb.create(req.body);
        return res.render("signin");
      }
    }
  } catch (err) {
    console.log("There is some technical issue : ", err);
    return;
  }
});

// Step-3 :- Listening the client requests on the defined port....
app.listen(port, function (err) {
  if (err) {
    console.log(
      "An error has been occured due to this technical issue : ",
      err
    );
  } else {
    console.log("Your server has been successfully up and working fine....");
  }
});
