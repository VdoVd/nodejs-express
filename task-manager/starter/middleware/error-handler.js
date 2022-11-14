const errorHandlerMiddleware= (err,req,res,next) =>{
    return res.status(500).json({msg:`something get wrong , trg again later`})
}

module.exports=errorHandlerMiddleware
