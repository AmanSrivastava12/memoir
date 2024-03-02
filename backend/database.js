require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

const connecttoMongoDB = () => {
  mongoose
    .connect(mongoURI)
    .then(console.log("Connection to database success."))
    .catch((err) => console.error(err));
};

module.exports = connecttoMongoDB;
