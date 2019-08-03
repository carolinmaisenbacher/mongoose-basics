const mongoose = require("mongoose");

// define schema
const ingredientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    amount: { type: Number, default: 500 }
  }
  // you could define custom collection names
  //  ,{ collection: "Ingredient" }
);

// create model
// default collection name is "ingredients"
const IngredientModel = mongoose.model("Ingredient", ingredientSchema);

module.exports = IngredientModel;

// All schema types:
// var schema = new Schema(
//     {
//       name: String,
//       binary: Buffer,
//       living: Boolean,
//       updated: { type: Date, default: Date.now() },
//       age: { type: Number, min: 18, max: 65, required: true },
//       mixed: Schema.Types.Mixed,
//       _someId: Schema.Types.ObjectId,
//       array: [],
//       ofString: [String], // You can also have an array of each of the other types too.
//       nested: { stuff: { type: String, lowercase: true, trim: true } }
//     })

// docs: https://mongoosejs.com/docs/schematypes.html
