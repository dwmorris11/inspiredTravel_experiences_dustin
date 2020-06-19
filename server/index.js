const express = require('express');
const morgan = require('morgan');
const Promise = require('bluebird');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { destinationModel } = require('../database/destinationDB.js');
const { experienceModel } = require('../database/experiencesDB.js');

// const axios = require('axios');
// const { client } = require('../s3client.js');

const app = express();
const port = 3636;

app.use(morgan('dev'));
app.use(express.static('/Users/dustinmorris/junior/trip/public/dist'));

const findExperiences = (destination) => (
  Promise.map(destination[0].experiences, (id) => (
    experienceModel.find({ id: `${id}` })
      .then((experience) => experience[0])
      .catch(() => ({}))
  ))
);

app.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id < 1 || id > 100) {
    res.send(JSON.stringify({}));
  }
  destinationModel.find({ id: `${id}` })
    .then((destination) => findExperiences(destination))
    .then((query) => {
      res.status(200).send(query);
    })
    .catch(() => res.status(404).send('{}'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
