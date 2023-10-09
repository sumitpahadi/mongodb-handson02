const express = require("express");
const app = express();
const route = require("./Routing/routes");
const client = require("./mongodb/connection");
app.use(express.json());
app.use("/", route);
const port = 4000;

const connecting = async () => {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
  }
};

connecting();

app.listen(port, () => {
  console.log("server is running on port number " + port);
});
