const express = require('express');
const serverless = require('serverless-http');
const app = express();

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(express.json());

require('./routing/html/html-routes.js')(app);

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
module.exports.handler = serverless(app);
