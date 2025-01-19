const express = require("express");
const {createPost ,getAllPosts,getPostbyId,updatePost,deletePost} = require("../controllers/postController");

const validatePost = require("../middlewares/validatepostmiddleware");
const router = express.Router();

router.post("/",validatePost,createPost);
router.get("/",getAllPosts);
router.get("/:id",getPostbyId);
router.put("/:id",validatePost,updatePost);
router.delete("/:id",deletePost);

module.exports = router;