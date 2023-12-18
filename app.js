const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost/patientDB',{useNewUrlParser: true, useUnifiedTopology: true});

const patientRoutes = require('./routes/patientRoutes');
app.use('/patients',patientRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});
