const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const reportsRoute = require('./routes/reports');
require('dotenv/config');

app.use(bodyParser.json());
app.use('/reports', reportsRoute);

app.get('/', (req, res) => {
    res.send('home page');
})

// Connect to DB
mongoose.connect(
    process.env.MONGO_CONNECTION,
    { useNewUrlParser: true , useUnifiedTopology: true },
    () => console.log("connected to DB")
);

// Start listening to the server
app.listen(3000, () => {
    console.log('listening on port 3000')
});