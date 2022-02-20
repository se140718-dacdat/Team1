const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());
app.use(express.json());

app.listen(3001, function() {
    console.log('listening on 3001');
})

app.use("/", require("./routes/courseRoute"));
mongoose.connect('mongodb+srv://mongodemo:1593572486@cluster0.hbdm2.mongodb.net/Unigate');