const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//the uri is where the db is stored
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established");
});

// requiring and using the routes ie endpoints
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users',userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
