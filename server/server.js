const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const todoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean,
})

const Todo = mongoose.model('Todo', todoSchema)

// Connect to MongoDB
const mongoURI = "mongodb+srv://Apar_Shrestha:iambatman@nodeexpressprojects.lkegi.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProjects"

mongoose.connect(mongoURI)
.then(()=> console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Connection error:',err))

app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`))