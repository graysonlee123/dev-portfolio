const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});