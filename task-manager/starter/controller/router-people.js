const getAllTasks=(req,res)=>{
    res.send('all items')
}
const createTask=async (req,res)=>{
    const task=await Task.create(req.body)
    res.status(201).json({task})
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
const Task=require('../models/Task')
module.exports ={
    getAllTasks,createTask,getTask,updateTask,deleteTask
}
