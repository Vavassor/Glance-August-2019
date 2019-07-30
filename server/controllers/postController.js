const models = require("../models");

module.exports = {
  getAllPosts: function(request, response, next) {
    models.Post
      .find()
      .then(posts => response.json(posts))
      .catch(next);
  },
};