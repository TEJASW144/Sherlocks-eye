import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import Cookies from "cookies";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./models/User.js";
import Comment from "./models/Comment.js";
import cors from "cors";
import jwt from "jsonwebtoken";

const secret = "secret123";
const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
function getUserFromToken(token) {
  const userInfo = jwt.verify(token, secret);
  console.log(userInfo);
  return User.findById(userInfo.id);
}
await mongoose
  .connect(
    "mongodb+srv://tejasw:ZkR7Rd7rdV4zg25T@cluster0.emfev.mongodb.net/?retryWrites=true&w=majority" 
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
const db = mongoose.connection;
db.on("error", console.log);
app.get("/", (req, res) => {
  res.send("ok");
});
app.post("/register", (req, res) => {
  const { email, username } = req.body;
  console.log(req.body);
  const password = bcrypt.hashSync(req.body.password, 10);
  const user = new User({ email, username, password });
  user
    .save()
    .then(() => {
      // console.log(info);
      res.sendStatus(201);
      jwt.sign({ id: user._id }, secret, (err, token) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.status(201).cookie("token", token).send();
        }
      });
    })
    .catch((e) => {
      console.log(e);
      res.sendStatus(500);
    });
});
app.get("/user", (req, res) => {
  const token = req.cookies.token;

  getUserFromToken(token)
    .then((user) => {
      res.json({ username: user.username });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }).then((user) => {
    if (user && user.username) {
      const passOk = bcrypt.compareSync(password, user.password);
      if (passOk) {
        jwt.sign({ id: user._id }, secret, (err, token) => {
          res.cookie("token", token).send();
        });
      } else {
        res.status(422).json("Invalid username or password");
      }
    } else {
      res.status(422).json("Invalid username or password");
    }
  });
});
app.post("/logout", (req, res) => {
  res.cookie("token", "").send();
});


app.get('/comments', (req, res) => {
  Comment.find().then(comments => {
    res.json(comments);
  });
});

app.listen(4000);
