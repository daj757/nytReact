const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  date: {
    type: Date,
    Default: Date.now
  },
  url: {
  	type: String,
  	unique: true
  }
});
const History = mongoose.model("History", HistorySchema);
module.exports = History;