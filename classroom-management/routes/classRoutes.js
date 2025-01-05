const express = require("express");
const Class = require("../models/Class");
const router = express.Router();

router.post("/",async(req,res)=>{
    try {
        const newClass = await Class.create(req.body);
        res.status(201).json(newClass);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get("/",async(req,res)=>{
    try {
        const classes = await Class.find();
        res.status(200).json(classes)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})


router.get("/:id",async(req,res)=>{
    try {
        const foundClass = await Class.findByID(req.params.id);
        if(!foundClass)return res.status(400).json({error:"class is not found"});
        res.status(200).json(foundClass)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.put("/:id",async(req,res)=>{
    try {
        const updateClass = await Class.findByIDAndUpdate(req.params.id);
        
        res.status(200).json(updateClass)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try {
         await Class.findByIDAndDelete(req.params.id);
        
        res.status(204).send()
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports = router;