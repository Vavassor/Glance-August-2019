const postController = require("../../controllers/postController");
const router = require("express").Router({mergeParams: true});

router.route("/")
  .get(postController.getAllPosts);

module.exports = router;