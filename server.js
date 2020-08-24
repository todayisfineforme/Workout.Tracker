const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const workout = require('./models/workout');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser: true});

// require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, () => console.log(`API is listening on port ${PORT}`));