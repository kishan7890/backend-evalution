module.exports = (err,req,res,next)=>{
    console.log(err.stack);
    res.json({erroe:"somthing went wrong"})
}