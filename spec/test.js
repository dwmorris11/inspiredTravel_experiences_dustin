/**
 * @jest-environment node
 */
const axios = require('axios');
const _ = require('lodash');
const puppeteer = require('puppeteer');
require("regenerator-runtime/runtime");

// get route should respond with an 5 element array of experience JSON objects
// count
// make sure they are objects
// make sure they all have unique ids

describe('GET ROUTE `/:id`', () => {
  var response;
  beforeAll(() => {
    return axios.get('http://localhost:3636/005')
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
    return axios.get('http://localhost:3636/999')
    .then((res) => {
      response = res.data;
    })
    .catch((error)=>{response = error});
  });

  // test('should respond with an error', () => {
  //   expect(response).toEqual(expect.stringMatching(/\b\[Error/));
  // });
});

describe('Check functionality using Pupeteer', () => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('http://localhost:3636/006');
      expect(page.on('requestfailed', () => true)).not.toBe(true);
      expect(page.on('requestfinished', () => true)).toBe(true);
      await browser.close();
    } catch (e) {
      if (e instanceof puppeteer.errors.TimeoutError) {
        console.log('Pupeteer did not open the page.');
      }
    }
  })();
})