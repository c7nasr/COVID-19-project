const AXIOS = require("axios");
const Push = require("../models/notifications");
const App = require("../models/app");
exports.getNow = async (req, res) => {
  const getNow = await AXIOS.get("https://covid19eg.com/api/v1/daily");
  res.json(getNow.data);
};

exports.prediction = async (req, res) => {
  const prediction = await AXIOS.get("https://covid19eg.com/api/v1/projection");
  res.json(prediction.data);
};

exports.history = async (req, res) => {
  const historical = await AXIOS.get("https://covid19eg.com/api/v1/historical");
  res.json(historical.data);
};

exports.pushToken = async (req, res) => {
  const isFound = await Push.find(req.body);
  if (isFound.length == 0) {
    await Push.create(req.body);
    res.sendStatus(200);
  } else {
    res.sendStatus(200);
  }
};

