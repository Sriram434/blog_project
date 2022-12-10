require('dotenv').config();
const express  = require('express')
const app = express();  
require('./src/db/conn')
const cors = require('cors')
const router = require('./src/routes/router')

app.use(cors())
app.use(express.json())
app.use(router)


const port = 8083
app.listen(port, ()=> {
    console.log("server is listern", port)
})