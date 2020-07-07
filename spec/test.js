/**
 * @jest-environment node
 */
const axios = require('axios');
const _ = require('lodash');
const puppeteer = require('puppeteer');
require("regenerator-runtime/runtime");
require("../database/index.js");

// get route should respond with an 5 element array of experience JSON objects
// count
// make sure they are objects
// make sure they all have unique ids

describe('GET ROUTE `/:id/api/experiences`', () => {
  var response;
  beforeAll(() => {
    return axios.get('http://localhost:3636/005/exp/api')
    .then((res) => {
      response = res.data;
    })
    .catch((error)=>console.log(error));
  });

  test('should respond with an array of 5', () => {
    expect(response).toHaveLength(5);
  });

  test('should respond with an array of experiences', () => {
    _.forEach(response, (item) => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('description');
    });
  });

  test('each object should have a unique id', () => {
    let ids = [];
    _.forEach(response, (item) => {
      ids.push(item.id);
    });
    expect(_.uniq(ids)).toHaveLength(5);
  });
});

describe('GET ROUTE `/id` where id does not exist', () => {
  var response;
  beforeAll(() => {
    return axios.get('http://localhost:3636/999/exp')
    .then((res) => {
      response = res.data;
    })
    .catch((error)=>{response = error});
  });

  // test('should respond with an error', () => {
  //   expect(response).toEqual(expect.stringMatching(/\b\[Error/));
  // });
});
