const asyncWrapper = (fn) => {
    return async (req,res,next)=>{
        try {
            await fn(res,req,next)
        }catch (err){
            next(err)
        }
    }
}

module.exports = asyncWrapper
