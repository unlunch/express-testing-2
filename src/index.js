const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

app.use(express.json());

const expressRouter = require('./routes');

app.use(expressRouter);

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(port, host, () => {
  console.log(`App listening at http://${host}:${port}`);
});
