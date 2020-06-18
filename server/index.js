const express = require('express');
const { db } = require('../database/index.js');
// const axios = require('axios');
const morgan = require('morgan');
// const { client } = require('../s3client.js');

const app = express();
const port = 3636;

app.use(morgan('dev'));

// app.get('/:id', (req, res) => {
//   const id = req.params.id;

// })

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
