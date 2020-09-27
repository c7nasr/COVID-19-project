const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
 
});

const App = mongoose.model("App", appSchema);

module.exports = App;
