import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./models/User.js";
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
await mongoose
  .connect(
    "mongodb+srv://adityagup780:oOgzqnNCPOvAM2xp@cluster0.jls3etc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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

app.listen(4000);
