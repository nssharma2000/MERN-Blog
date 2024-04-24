const mongoose = require('mongoose')

const CommentsSchema = new mongoose.Schema({
    username: {type: String, required: true},
    c_content:  {type: String, required: true}
})


const CommentsModel = mongoose.model("comments", CommentsSchema)
module.exports = CommentsModel
