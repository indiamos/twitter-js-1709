const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url, res.statusCode);
  next();
})

app.get('/', (req, res, next) => {
  res.send('Hello, world!');
})

app.use('/news', (req, res, next) => {
  console.log('This is /news');
  next();
})

app.get('/news', (req, res, next) => {
  res.send('Welcome to /news!');
})

app.listen(8181, () => {
  console.log('Now listening at http://localhost:8181');
})
