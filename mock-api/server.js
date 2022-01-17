const express = require('express');
const router = require('./router');

const app = express();
const port = 3001;

const cors = function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
};

app.use(express.json());
app.use(cors);
app.all('*', router);

app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});
