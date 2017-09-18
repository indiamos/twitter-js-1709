const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
})

app.listen(8181, () => {
  console.log('Now listening at http://localhost:8181');
})
