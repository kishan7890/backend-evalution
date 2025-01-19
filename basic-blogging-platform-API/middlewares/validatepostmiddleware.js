module.exports = (req,res,next)=>{
    const {title,content}= req.body;
    if(!title || !content){
        return res.json({error:"title and content are required"});
    }
    next();
}