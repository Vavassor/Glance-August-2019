const postController = require("../../controllers/postController");
const router = require("express").Router();

router.route("/")
  .get(postController.getAllPosts)
  .post(postController.validateCreate, postController.create);

module.exports = router;