import mongoose from "mongoose";
const userschema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});
const User = mongoose.model("User", userschema);
export default User;
