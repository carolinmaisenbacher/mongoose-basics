const express = require("express");

const db = require("./database");

const Ingredient = require("./models/Ingredient");

// create web server
const app = express();

app.get("/create", (req, res) => {
  // create new Document
  const ingredient = new Ingredient({
    // in case you don't want mongos default id, you could create the id manually:
    // _id: mongoose.Types.ObjectId(),
    name: "Banana Flour",
    amount: 502
  });

  // save it
  ingredient
    .save()
    .then(result => res.status(200).json({ docs: [ingredient] }))
    .catch(err => console.log(err));
});

app.get("/", (req, res) => {
  // get all ingredients
  Ingredient.find()
    // exec returns a promise, find() returns a query type
    .exec()
    .then(docs => res.status(200).json({ docs }))
    .catch(err => console.log(err));
});

app.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  Ingredient.findById(id)
    .exec()
    .then(doc => {
      if (doc) {
        doc.remove();
        res.status(200).json({ deleted: true });
      } else {
        res.status(401).json({
          message: `Document with id ${id} not found`,
          deleted: false
        });
      }
    })
    .catch(err => {
      res.status(401).json({
        message: `Invalid id`,
        deleted: false
      });
    });
});

app.listen(8888, () =>
  console.log("Server is running at http://localhost:8888")
);
