require('dotenv').config()

const express=require('express')
const app=express()
const routerProducts = require('./routes/products')
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const connectDB = require('./db/connect')
//middleware
app.use(express.json())

app.use('/api/v1/products',routerProducts)

app.use(notFoundMiddleware)
app.use(errorMiddleware)
const port = 3000

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URL)
        console.log('connect to db')
        app.listen(port,()=>{
            console.log(`Server is listening port ${port}...`)
        })
    }catch (err){
        console.log(err)
    }
}

start()
