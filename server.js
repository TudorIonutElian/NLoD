const express = require('express');

const app = express();

app.get('/start', (req, res) => {
    res.send('Hello App');
});

const port = 5000;

app.listen(port);