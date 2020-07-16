const express = require('express');
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const logger = require('morgan');

const indexRouter = require('./router/index');
const postRouter = require('./router/posts');


require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/', indexRouter);
app.use('/posts', postRouter);
app.get("/user", (req, res) => {
    // res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
});



// //Connect To DB
mongoose.connect(
    "mongodb+srv://test:BAnYNjg41RkR8F5Y@cluster0-ngxva.mongodb.net/test?retryWrites=true&w=majority",
    { useUnifiedTopology: true , useNewUrlParser: true},
    () => {
    console.log('Connect to DB');
    })

app.listen(3000);