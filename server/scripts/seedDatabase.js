const mongoose = require("mongoose");
const models = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/glance");

const postSeeds = [
  {
    title: "me",
    content: "nothing to see here",
  },
  {
    title: "it's me, again",
    content: "still nothing",
  },
];

models.Post
  .deleteMany({})
  .then(() => models.Post.collection.insertMany(postSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });