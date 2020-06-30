const express = require('express');
const morgan = require('morgan');
const Promise = require('bluebird');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { destinationModel } = require('../database/destinationDB.js');
const { experienceModel } = require('../database/experiencesDB.js');
const { db } = require('../database/index.js'); // eslint-disable-line
// const axios = require('axios');
// const { client } = require('../s3client.js');

const app = express();
const port = 3636;

app.use(morgan('dev'));
app.use('/:id/exp', express.static('./public/dist'));

const findExperiences = (destination) => (
  Promise.map(destination[0].experiences, (id) => (
    experienceModel.find({ id: `${id}` })
      .then((experience) => experience[0])
      .catch(() => ({}))
  ))
);

app.get('/:id/exp/api/', (req, res) => {
  const { id } = req.params;
  const numId = Number(id);
  if (numId < 1 || numId > 100) {
    res.status(404).send('ID is out of bounds.  Must be between 001-100');
  }
  destinationModel.find({ id: `${id}` })
    .then((destination) => (findExperiences(destination)))
    .then((query) => {
      res.status(200).send(query);
    })
    .catch((error) => res.status(404).send(error));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);  // eslint-disable-line
});
