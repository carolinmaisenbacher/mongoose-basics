# mongoose-basics

Basic Express / Mongooose CRUD application to understand connections, models, schemas, etc.

## Installation

### Prerequisites

- you have node installed
- you installed mongodb

### Setup

1. Clone this repo and move into the project folder
2. Run `yarn` to download all dependencies
3. In a seperate terminal window: Start the MongoDB Daemon with `mongod`
4. Back in the project folder: run `yarn run develop`
   This starts the express server with nodemon. Nodemon watches the server.js file and all of its imported files.
   So whenever you update the code the server will restart automatically.

In case you don't want that, you can also simply run `node server.js`.

Starting your server will create a new mongo db automatically. The default name is "mongoose_basics".

## Overview

The application consists of 3 main parts. I split each of them up in a seperate file.

### `database.js`

Here we import mongoose, our MongoDB ORM.
We don't create a database connection with the `mongoose.connect()` function. We catch any errors print message to the console, when we succeed.

We also make sure any db connection errors will be logged with the `mongoose.connection.on('error', …)` function.

Finally we export the db connection.

This means, the moment we now import the `database.js` file, the connection to the db will be instantiated.
However, it is to note that mongoose follows the singleton pattern and will only be instantiated once.
Even if we import it in several files, we will always work with the same db connection instance.

### `models/Ingredient.js`

In this file we define the Ingredient model.

First we define the schema for our Ingredient model with `new mongoose.Schema({…})`
Here we could also define details, e.g. set a custom collection name, etc.

A schema can be much more than just "fields". You could e.g. also define functions for it. (A dog schema could `bark()`, etc.)
Read more about that in the docs of mongoose.

After we defined the schema its time to create the actual model with
`const IngredientModel = mongoose.model("Ingredient", ingredientSchema);`

Finally, we export the IngredientModel#

### `server.js`

Finally, in this file everything comes together: The express server, database operations and our Ingredient model.

We fire create an express server

```
const express = require('express')
const app = express()
```

We also import the db from before.
This import will trigger the connection to the db.

```
const db = require("./database");
```

We can now define different routes for different database operations

#### `localhost:8888/create`

Will create an Ingredient "Banana Flour"

#### `localhost:8888/`

You get a list of all ingredients

#### `localhost:8888/delete`

Deletes an Ingredient by ID

#### `localhost:8888/update`

will update an Ingredient to have the title "Apple Pie".

Try it out :).
