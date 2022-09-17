const express = require('express')
const cors = require('cors')
const router = require('./routes/route')
require('./db/db')

const app = express()


app.use(express.urlencoded())
app.use(express.json())
app.use(cors())



app.use('/',router)

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})