const express = require('express')
const router = express.Router();
const blogs = require('../models/blogSchema')


// GET CALL GET ALL BLOGS
router.get('/', async (req, res) => {
  try {
    const getData = await blogs.find();
    res.status(200).json(getData)
    console.log(getData)
  } catch (err) {
    res.status(404).json(err.message)
  }
})

//POST CALL CREATE NEW BLOG
router.post('/newblog', async (req, res) => {
  const { title, text } = req.body;
  try {
    const isTitleExists = await blogs.findOne({ title: title })
    console.log(isTitleExists)
    if (isTitleExists) {
      res.status(404).json("This title is already exists")
    } else {
      const addTitle = new blogs({ title, text })
      await addTitle.save();
      res.status(201).json(addTitle)
      console.log(addTitle);

    }
  } catch (err) {
    res.status(404).json(err.message)
  }
})

//GET blog individual
router.get('/newblog/:id',  async(req, res) => {
  try{
    const {id} = req.params;
    const indiBlog = await blogs.findById({_id: id})
    res.status(201).json(indiBlog)

  }catch(err) {
    res.status(404).json(err.message)
  }
})


//Patch blog data
router.patch('/newblog/:id', async(req,res) => {
  if(req.body.title !== "" && req.body.text !== "") {
    try{
      const {id} = req.params;
      const updatedBlog = await blogs.findByIdAndUpdate(id, req.body, {new:true})
      res.status(201).json(updatedBlog)
    }catch(err){
      res.status(404).json(err.message)
    }
  } else {
    res.status(404).json("Empty data is not allowed")
  }
})

//DELETE blog data
router.delete('/newblog/:id', async(req,res) => {
  try{
    const {id} = req.params;
    const delteBlog = await blogs.findByIdAndDelete(id)
    console.log(req.body)
    res.status(201).json(delteBlog)
  }catch(err){
    res.status(404).json(err.message)
  }
})


module.exports = router;