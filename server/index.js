const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}...`);
});
