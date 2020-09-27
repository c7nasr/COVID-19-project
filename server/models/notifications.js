const mongoose = require("mongoose");

const pushSchema = new mongoose.Schema({
  token:{
  },
});

const Push = mongoose.model("Push", pushSchema);

module.exports = Push;
