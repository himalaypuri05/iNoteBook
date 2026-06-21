const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSChema = new Schema({
  user: {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'
  },
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true,
  },
  tag: {
    type: String,
    default: "General"
  },
  date: {
    type: Date,
    default: Date.now,
    require: true
  }
});

module.exports = mongoose.model('notes', NotesSChema)
