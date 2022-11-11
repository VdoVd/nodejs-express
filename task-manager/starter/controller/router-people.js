const Task=require('../models/Task')

const getAllTasks=async (req,res)=>{
    try {
        const tasks=await Task.find({})
        res.status(200).json({tasks:tasks})
    }catch (err){
        res.status(500).json({msg: err})
    }
}
const createTask=async (req,res)=>{
    try {
        const task=await Task.create(req.body)
        res.status(201).json({task})
    }catch (error){
        res.status(500).json({msg: error})
    }
}
const getTask=(req,res)=>{
     res.send('all items')
}
const updateTask=(req,res)=>{
    res.send('all items')
}
const deleteTask=(req,res)=>{
    res.send('all items')
}
module.exports ={
    getAllTasks,createTask,getTask,updateTask,deleteTask
}
