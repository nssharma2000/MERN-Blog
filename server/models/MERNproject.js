const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username: {type: String},
    email: {type: String},
    password:  {type: String}
})

UserSchema.pre('save', async function (next) {
    const user = this; 

    
    if (user.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
    }
    next();
})

    



const UserModel = mongoose.model("blogusers", UserSchema)
module.exports = UserModel
