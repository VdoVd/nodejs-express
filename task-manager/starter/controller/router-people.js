const Task=require('../models/Task')

const asyncWraper = require('../middleware/wrapper')

const getAllTasks=asyncWraper (async (req,res)=>{
        const tasks=await Task.find({})
        res.
        status(200).
        json({status:"success",data:{tasks,nbHits:tasks.length}})
})

const createTask=asyncWraper(async (req,res)=>{
        const task=await Task.create(req.body)
        res.status(201).json({task})
})

const getTask=asyncWraper( async (req,res)=>{
        const {id:taskID}=req.params
        const task=await Task.findOne({_id:taskID})
        res.status(200).json({task})
})

const updateTask=asyncWraper(async (req,res)=>{
        const {id:taskID}=req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!task) {
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        res.status(200).json({id:taskID,data:req.body})
})

const deleteTask=asyncWraper(async (req,res)=>{
        const {id:taskId}=req.params

        const task=await Task.findOneAndDelete({_id:taskId},req.body,{
            new:true,
            runValidators: true
        })

        if(!task){
            return res.status(404).json({msg:`No task with id: ${taskId}`})
        }

        res.status(200).json({task:null,status:'success'})
})

module.exports ={
    getAllTasks,createTask,getTask,updateTask,deleteTask
}
