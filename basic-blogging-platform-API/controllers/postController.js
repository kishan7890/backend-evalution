const { error } = require("console");
const fs = require("fs");
const path = require("path");
const { json } = require("stream/consumers");
const dbPath = path.join(__dirname,"../db/db.json");


const readDb = ()=> JSON.parse(fs.readFileSync(dbPath,"utf-8")||'[]');
const writeDb = data => fs.writeFileSync(dbPath,JSON.stringify(data,null,2));

const createPost = (req,res)=>{
    const {title,content,author} = req.body;
    const posts = readDb();
    const newPost = {id:Date.now().toString(),title,content,author};
    posts.push(newPost);
    writeDb(posts);
    res.json(newPost);
}

const getAllPosts = (req,res)=>{
    const posts = readDb();
    res.json(posts);
}

const getPostbyId = (req,res)=>{
    const posts = readDb();
    const post = posts.find(p => p.id === req.params.id);
    if(post){
        res.json(post);
    }else{
        res.json({error:"post not found"});
    }
}

const updatePost = (req,res)=>{
    const {title,content} = req.body;
    const posts = readDb();
    const postindex = posts.findIndex(p=> p.id === req.param.id);
    if(postindex === -1) return res.ststus(404).json({error:"post not found"});

    posts[postindex]= {...posts[postindex],title,content};
    writeDb(posts[postindex]);
}

const deletePost = (req, res)=>{
    const posts = readDb();
    const updateposts = posts.filter(p=> p.id === req.params.id);
    writeDb(updatePosts);
    res.json({msg:"post deleted"});
}

module.exports = {createPost,getAllPosts,getPostbyId,updatePost,deletePost};