const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/imageComparisonStudy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(error => console.error('Error connecting to MongoDB:', error.message));

const responseSchema = new mongoose.Schema({
    text: String,
    leftImage: String,
    rightImage: String,
    word: String,
});

const Response = mongoose.model('Response', responseSchema);

// Routes
app.post('/responses', async (req, res) => {
    const { text, leftImage, rightImage, word } = req.body;
    const response = new Response({ text, leftImage, rightImage, word });
    await response.save();
    res.status(201).send(response);
});

app.get('/responses', async (req, res) => {
    const responses = await Response.find().limit(5);
    res.send(responses);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
