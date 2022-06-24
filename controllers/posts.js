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
		res.status(500).json({ 
			success: false,
			message: 'Server error',
			data: {}
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
		res.status(500).json({ 
			success: false,
			message: 'Server error',
		})
	}
}


exports.updatePosts = async (req, res, user)=>{
	try{
		const postDeets = await Post.findById(req.params.id)

		postDeets.title = req.body.title
		postDeets.post = req.body.post

		postDeets.save((err, result)=>{
			if(err){
				res.status(404).json(err)
			}
			res.status(200).json({
				sucess: true,
				message: "Post successfully updated",
				data: postDeets
			})
		})
	}catch(error){
		res.status(500).json({
			success: false,
			message: 'Server error',
			data: {}
		})
	}
}



exports.deletePosts = async (req, res) => {
	try{
		const foundPost = await Post.findById(req.params.id)

		if(!foundPost){
			res.status(404).json({
				success: false,
				message: "No post found",
				data: {}
			})
		}
		await foundPost.remove()
		res.status(200).json({
			success: true,
			message: "Post successfully deleted",
			data: {}
		})
	}catch(err){
		res.status(500).json({ 
			success: false,
			message: 'Server error',
			data: {}
		})
	}
}
