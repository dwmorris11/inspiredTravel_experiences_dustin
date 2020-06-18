const axios = require('axios');
const _ = require('lodash');

// get route should respond with an 5 element array of experience JSON objects
  //count
  //make sure they are objects
  //make sure they all have unique ids
describe('GET ROUTE `/:id`', ()=>{
  var response;
  beforeAll(() => {
    return axios.get('http://localhost:3636/5')
    .then((data) => {
      response = data.data;
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
    .then((data) => {
      response = data.data;
    })
    .catch((error)=>console.log(error));
  });

  test('should respond with an empty object', () => {
    expect(_.isEmpty(response)).toBeTruthy();
  });
});