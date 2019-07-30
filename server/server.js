const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}

app.use(routes);
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/glance";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

app.listen(PORT);