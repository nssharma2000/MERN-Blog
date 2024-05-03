const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/MERNproject')
const CommentsModel = require('./models/BlogComments')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const app = express()

app.use(express.json())
app.use(cors())

let token;


app.get('/receive_token', async (req, res) =>

{
try
{
const decoded = jwt.verify(token, process.env.JWT_SECRET)
console.log(decoded)
res.json(decoded)
}
catch(error)
{
  res.json(error)
}
})




try
{
mongoose.connect("mongodb+srv://nssharma2000:nama1234@cluster0.j6yc4ab.mongodb.net/MERNproject?retryWrites=true&w=majority&appName=Cluster0")
}
catch(error)
{
  console.log(error)
}



app.post('/register', async (req, res) => {
console.log(req.body)


const hashedPassword = await hashPassword(req.body.password); // Call hashPassword function

  const newUser = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword, // Use the hashed password
  });

  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err.message }); // Handle errors appropriately
  }
})




app.post('/add_comment', async (req, res) => {
  console.log("add comment");
  console.log(req.body)

  const newComment = new CommentsModel({
    username: req.body.username,
    c_content: req.body.c_content
  })

  try {
    const savedComment = await newComment.save();
    res.json(savedComment);
  } catch (err) {
    res.json({ message: err.message }); // Handle errors appropriately
  }
})

app.get('/get_comments', async (req, res) => {
  console.log("get request")

  const all_comments = await CommentsModel.find().lean();
  console.log(all_comments)
  res.json(all_comments)

})

















async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10); // Adjust salt rounds as needed
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log("It's hashed!")
  return hashedPassword;
}

app.post('/login', async (req, res) =>
{
   
  const { username, password } = req.body;
  console.log(req.body);

  try {
    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      // Generate JWT upon successful login
      const payload = { userId: user._id };
      token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1m' });
      console.log("The token is: ", token)
      res.json()



      

    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
})

 

app.listen(3001 || process.env.PORT, () => {
  console.log("Server is running. ")
})