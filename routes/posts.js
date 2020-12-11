const express = require('express')
const router = express.Router()
const posts = require('../controllers/posts')


router.get('/', posts.getPosts)

router.post('/', posts.addPosts)

router.delete('/:id', posts.deletePosts)


module.exports = router