const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('Hello, world!');
});

app.get('/news', (req, res, next) => {
  res.send('Welcome to /news!');
})

app.listen(8181, () => {
  console.log('Now listening at http://localhost:8181');
})
