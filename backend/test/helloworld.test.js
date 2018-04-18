const { expect } = require('chai');
const request = require('request');

describe('hello world works', () => {
  it('should return a message when requesting hello', async () => {
    request('http://localhost:9000/api/v1/hello/world', (error, response, body) => {
      expect(body).to.equal('Hello World from backend');
    });
  });
});
