require('dotenv').config();
const express = require('express');
const app = express();

// Define the port using process.env.PORT or default to 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('Cuckko');
});

app.get('/login', (req, res) => {
    res.send('<h1>Mahri Marzi</h1>');
});

// Use PORT variable in the listen method
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
