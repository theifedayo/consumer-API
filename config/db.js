const mongoose = require('mongoose')



const connectDB = async ()=>{
	try{
		const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
			console.log("Express app connected to DB successfully")
		})
	}catch(error){
		console.error(error)
		process.exit(1)
	}
}

module.exports = connectDB