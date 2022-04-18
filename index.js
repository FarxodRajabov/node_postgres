const express = require('express')
const userRouter = require('./routes/user.roures.js')
const postRouter = require('./routes/user.roures.js')


const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)


app.listen(PORT, () => console.log(`server started on port ${PORT}`))