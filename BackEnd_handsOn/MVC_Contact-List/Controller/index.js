// Step-1 :- import and initializing the express and port-no and path.
const express = require("express");
const port = "8000";
const path = require("path");

// Step-7 :-  Connecting Controller to your database...
const db = require("./config/mongoose");
const contact = require("./models/contact");

// Step-2 :- initializing the express web app...
const app = express();

// Step-6 :- Middlewares
/* ---for including assets--- */
app.use(express.static("assets"));
/* ----Parser for reading params---- */
app.use(express.urlencoded());

// Step-5 :- Initializing and Connecting template engine as ejs and views folder...
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Contact_Lists Variable...
const contacts = [
  {
    name: "Meee",
    phone: "7809869752",
  },
  {
    name: "Papa",
    phone: "7749076539",
  },
  {
    name: "SGgitu",
    phone: "9861548880",
  },
  {
    name: "GSsubu",
    phone: "9861002455",
  },
  {
    name: "SGgitu",
    phone: "9861548880",
  },
  {
    name: "GSsubu",
    phone: "9861002455",
  },
  {
    name: "SGgitu",
    phone: "9861548880",
  },
  {
    name: "GSsubu",
    phone: "9861002455",
  },
];

// Step-4 :- Giving response on the different page...
app.get("/", function (req, res) {
  contact.find({}, function (err, contacts) {
    if (err) {
      console.log("error in fetching contacts from db");
      return;
    }
    console.log(contacts);
    return res.render("home", {
      title: "Contact_List",
      contacts: contacts,
    });
  });
});

app.post("/create-contact", function (req, res) {
  contact.create(
    {
      name: req.body.name,
      phone: req.body.phone,
    },
    function (err, newContact) {
      if (err) {
        console.log("An error has been occured while creating contact", err);
        return;
      }
      console.log("###########", newContact);
      return res.redirect("back");
    }
  );
});
// Mongoose js latest version....
/*app.post("/create-contact", function (req, res) {
    contact
      .create({ name: req.body.name, phone: req.body.phone })
      .then(function (newContact) {
        console.log("###########", newContact);
        return res.redirect("back");
      })
      .catch(function (err) {
        console.log("An error has occurred while creating contact", err);
        // Optionally, you can send an error response to the client
        res.status(500).send("An error has occurred");
      });
  });*/

app.get("/delete-contact", function (req, res) {
  // Get the id from query in the url...
  let id = req.query.id;

  // Getting and deleting the contact with id in database...
  contact.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("Some Error has been occured in deletion proocess...", err);
      return;
    }

    return res.redirect("back");
  });
});

// Step-3 :- Listening on the port...
app.listen(port, function (err) {
  if (err) {
    console.log("There is some error in listening on the port : ", err);
  } else {
    console.log(
      "Hey buddy!!! your server is successfully up and working fine on port : ",
      port
    );
  }
});
