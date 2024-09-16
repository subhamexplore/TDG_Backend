const express = require("express");
const app = express();
const port = 5000;
require("./db");
const getBlog = require("./models/Blog")
const Login = require("./models/Login");

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "origin,X-Requested-With,Content-Type,Accept"
  );
  next();
})

app.get("/getBlogs", (req, res) => {
  getBlog.find()
  .then(blogs=>res.json(blogs))
  .catch(err=>res.json(err))
})
app.get("/login", (req, res) => {
  Login.find()
  .then(blogs=>res.json(blogs))
  .catch(err=>res.json(err))
})

app.use(express.json());
app.use('/public', express.static('public'));

app.use('/api', require("./Routes/CreateBlog"));
app.use('/api', require("./Routes/Consultation"));
app.use('/api', require("./Routes/Contact"));
app.use('/api', require("./Routes/Login"));
app.use('/api', require("./Routes/Subscribe"));

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
