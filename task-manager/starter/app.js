const connectDB=require('./db/connect')
const express=require('express')
const app=express()
const tasks=require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handler')
require('dotenv').config()
//middleware
app.use(express.json())
app.get('/hello',(req,res)=>{
    res.send('hello')
})
app.use(express.static('./public'));
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port=3000

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL)
        console.log('connect to db')
        app.listen(port,()=>{
            console.log(`server is listening on port ${port}...`)
        })
    }catch (err){
        console.log('error happen in app.js')
        console.log(err)
    }
}

start()
