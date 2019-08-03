const mongoose = require("mongoose");

const db_name = process.env.DB_NAME || "mongoose_basics";
const db_user = process.env.DB_USER || "";
const db_password = process.env.DB_PASSWORD || "";
const db_host = process.env.DB_HOST || "localhost";
const db_port = process.env.DB_PORT || 27017;

// connect to db
mongoose.connect(
  `mongodb://${db_user}:${db_password}@${db_host}:${db_port}/${db_name}`,
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log("Connection to Database failed.");
    } else {
      // db conection was successful
      console.log(
        `Connected to db "${mongoose.connection.name}" 
        on ${mongoose.connection.host}:${mongoose.connection.port}  
        with user "${mongoose.connection.user || "not defined"}"`
      );
    }
  }
);

const db = mongoose.connection;
// log any connection errors
db.on("error", console.error.bind(console, "MongoDB connection error"));

module.exports = db;
