const express = require("express");
const {addAuthor,getAllauthors,getpostByAuthor}= require("../controllers/authorcontroller");

const router = express.Router()

router.post("/",addAuthor);
router.get("/",getAllauthors);
router.get("/:name/posts",getpostByAuthor);


module.exports = router;