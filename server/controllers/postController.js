const {check, validationResult} = require("express-validator");
const models = require("../models");

module.exports = {
  create: function(request, response, next) {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response
        .status(422)
        .json({
          errors: errors.array(),
        });
    }

    models.Post
      .create({
        title: request.body.title,
        content: request.body.content,
      })
      .then(post => response.json(post))
      .catch(next);
  },

  getAllPosts: function(request, response, next) {
    models.Post
      .find()
      .then(posts => response.json(posts))
      .catch(next);
  },

  validateCreate: [
    check("title").trim().not().isEmpty(),
    check("content").trim().not().isEmpty(),
  ],
};