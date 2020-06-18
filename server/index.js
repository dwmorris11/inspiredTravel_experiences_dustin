const express = require('express');
const router = express.Router();
const { db } = require('../database/index.js');
const { destinationModel } = require('../database/destinationDB.js');
const { experienceModel } = require('../database/experiencesDB.js');
const _ = require('lodash');
// const axios = require('axios');
const morgan = require('morgan');
// const { client } = require('../s3client.js');
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
const Promise = require('bluebird');

const app = express();
const port = 3636;

app.use(morgan('dev'));
app.use(router);

const findExperiences = function(destination) {
  return Promise.map(destination[0].experiences, (id) => {
    return experienceModel.find({id: `${id}`})
    .then((experience) => experience[0])
    .catch((error) => {
      return {};
    })
  });
};

app.get('/:id', (req, res) => {
  const id = req.params.id;
  if(id < 1 || id > 100) {
    res.send(JSON.stringify({}));
  }
  destinationModel.find({id: `${id}`})
  .then((destination) => findExperiences(destination))
  .then((query) => {
    res.status(200).send(query);
  })
  .catch((error) => res.status(404).send('{}'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

