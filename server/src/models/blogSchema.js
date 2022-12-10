const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,  
    },
    text:{
        type: String,
        required: true
    }
})

const blogs = new mongoose.model('blogs', blogSchema)

module.exports = blogs; 