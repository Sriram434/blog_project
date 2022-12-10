const mongoose = require('mongoose')

const DB = "mongodb+srv://sriram:7cCbzMl9CyClO9AY@cluster0.ugtmvuz.mongodb.net/blog_post?retryWrites=true&w=majority"

mongoose.connect(DB, {
    keepAlive: true,
    useNewUrlParser: true
})
.then( () => console.log("connected to DB."))
.catch( err => console.log(err));