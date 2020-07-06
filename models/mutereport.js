const mongoose = require("mongoose")

const mutereportSchema =mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  infraction: String,
  username: String,
  userID: String,
  reason: String,
  rUsername: String,
  rID: String,
  time: String
});

module.exports = mongoose.model("mutereport", mutereportSchema);
