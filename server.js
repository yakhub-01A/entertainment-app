const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const admin = require("./routes/api/admin");
const users = require("./routes/api/users");
const jokes = require("./routes/api/jokes");
const Comics =require("./routes/api/comics");
const videos =require("./routes/api/videos");
const musics =require("./routes/api/music");
const feed =require("./routes/api/feed");
const add_data =require("./routes/api/add_data");



const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

app.use(bodyParser.json());

const dbURL =  "mongodb://localhost:27017/mern-auth";

//connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI || dbURL,
    { useUnifiedTopology:true, useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/admin", admin);
app.use("/api/users", users);
app.use("/api/jokes", jokes);
app.use("/api/comics", Comics);
app.use("/api/videos", videos);
app.use("/api/music", musics);
app.use("/api/add_data", add_data);
app.use("/api/feed", feed);



if(process.env.NODE_ENV === 'production') {
   
  app.use(express.static(path.join(__dirname, "client", "build")))

  app.get('*',(req, res) => {
      res.sendFile(path.join(__dirname,'client','build','index.html'));
  });
}


const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server up and running on port ${port}`));

