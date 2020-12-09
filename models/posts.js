const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	post: {
		type: String,
		required: true,
		maxlength: [140, 'Characters should not be more than 140']
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})



module.exports = mongoose.model('Post', postSchema)