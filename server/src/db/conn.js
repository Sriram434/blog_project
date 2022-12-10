const mongoose = require('mongoose')

const DB = process.env.DATABASE

mongoose.connect(DB, {
    keepAlive: true,
    useNewUrlParser: true
})
.then( () => console.log("connected to DB."))
.catch( err => console.log(err));