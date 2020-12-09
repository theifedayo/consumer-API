const Post = require('../models/posts')

exports.getPosts = async (req, res) => {
	try {
		const posts = await Post.find()

		return res.status(200).json({
			success: true,
			count: posts.length,
			data: posts
		})
	}catch(err){
		console.error(err)
		res.status(500).json({ 
			success: false,
			message: 'Server error',
			data: null
		})
	}
}


exports.addPosts = async (req, res) => {
	try{
		const post = await Post.create(req.body)

		return res.status(200).json({
			success: true,
			message: "Post successfully created",
			data: post
		})
	}catch(err){
		console.error(err)
		res.status(500).json({ 
			success: false,
			message: 'Server error',
		})
	}
}