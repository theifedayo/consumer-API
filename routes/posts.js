const express = require('express')
const router = express.Router()
const posts = require('../controllers/posts')


router.get('/', posts.getPosts)

router.post('/', posts.addPosts)


module.exports = router