
const express = require('express')
const bodyParser = require("body-parser")
const userRouter = require('./routes/user.routes')
const PORT = 8080

const app = express()
app.use(bodyParser.json())
app.use(express.json())
app.use('/api', userRouter)
app.listen(PORT, () => console.log('server started'))

