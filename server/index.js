const path = require('path');
const { client } = require('../s3client.js');
const { db } = require('../database/index.js');
const axios = require('axios');
const morgan = require('morgan');
const express = require('express');

const app = express();
const port = 3636;

app.use(morgan('dev'));

app.

app.listen(port, () = {
  console.log(`Server listening on port ${port}`);
})
