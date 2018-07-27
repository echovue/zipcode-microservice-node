const express = require('express')

const app = express()
const port = process.env.PORT || 3000;
const routes = require('./api/routes/routes');

routes(app);

app.listen(port);

console.log('RESTful Application started on: ' + port);

