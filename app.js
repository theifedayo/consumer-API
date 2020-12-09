const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')



//load environment variables
dotenv.config({ path: './config/config.env'})

connectDB()

const app = express()

app.use(express.json())

app.use(cors())


//Routes
const posts = require('./routes/posts')
app.use('/api/posts', posts)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
})