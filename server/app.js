const express = require('express');
const coronaRoute = require('./routes/corona.route.js');

const app = express();

// 1) MIDDLEWARESs
 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());

 
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();   
  next();
});


 
// 3) ROUTES
app.use('/api/eg',coronaRoute);
// app.use('/api/v1/users', userRouter);
// app.use('/api/v1/orders', orderRouter);

app.all('*', (req, res) => {
res.status(404).send({
  status: "Failed",
  err: "Unhandled Route. Error 404"
})
// res.send()
});

module.exports = app;
