const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
    require: true
  }
});

const User = mongoose.model('user', UserSchema)
module.exports = User
