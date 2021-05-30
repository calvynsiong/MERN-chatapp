const path = require('path')
require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()
const messageRoutes = require('./routes/messageRoutes')

connectDB()
const PORT = process.env.PORT || 5000

app.use(express.json())

// ! Middleware
app.use(cors())


// ! Creating routes

app.use('/api/messages', messageRoutes)

app.get('/', (req, res) => {
  res.status(200).send('Oka computer')
})

// ! Deployment

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
