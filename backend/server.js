require("dotenv").config();
const connecttoMongoDB = require("./database");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.BACKEND_PORT;

connecttoMongoDB();

app.use(cors());
app.use(express.json());
app.use("/api/memo", require("./routes/memo"));
app.use("/api/mail", require("./routes/mail"));

app.listen(port, () => {
  console.log(`App is listening on localhost:${port}`);
});
