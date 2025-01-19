const Author = require("../models/autherModel");
const path = require("path");
const fs = require("fs");

const dbPath = path.join(__dirname,"../db/db.json");


const readDb = ()=> JSON.parse(fs.readFileSync(dbPath,"utf-8")||'[]');


const addAuthor = async(req,res)=>{
    try {
        const {name,email} = req.body;
        const author = new Author({name,email});
        await author.save();
        res.send("author added successful" ,author);
    } catch (error) {
        res.json({error:error.message})
    }
}

const getAllauthors = async(req,res)=>{
    try {
        const authors = await Author.find();
        res.json(authors)
    } catch (error) {
        res.json({error:error.message})
    }
}

const getpostByAuthor = (req,res)=>{
    const posts = readDb();
    const filteredposts = posts.filter(post => post.author === req.params.name);
    res.json(filteredposts);
}


module.exports = {addAuthor,getAllauthors,getpostByAuthor}

