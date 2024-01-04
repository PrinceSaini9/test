const express = require('express');
const mongoose = require('mongoose');
const user = require('./model');
const bodyParser = require('body-parser');

const connectionString = 'mongodb+srv://sainiprincesaini999:deTgNmVihgnmQ48y@cluster0.57cia1j.mongodb.net/DB-2';

// Connect to MongoDB Atlas
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connection successful');
    })
    .catch(err => {
        console.error('Connection error', err);
    });

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.get('/get', async (req, res) => {
    res.send("hi");
});

app.post('/', async (req, res) => {
    try {
        const data = new user({
            email: req.body.email
        })
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
        console.log(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
