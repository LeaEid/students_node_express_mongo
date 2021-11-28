var express = require('express');

require('./src/db/mongoose')

const studentsRouter = require('./src/routers/studentsRouter')

var app = express();
const port = process.env.PORT || 3000

app.use(express.json());

app.use(studentsRouter)

app.listen(port, function () {
  console.log(`Backend listening on port ${port} !`);
});
