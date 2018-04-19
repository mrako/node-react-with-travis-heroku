const chai = require('chai');
const http = require('chai-http');

const { expect } = chai;
chai.use(http);


describe('hello world works', () => {
  it('should succeed when requesting hello/world', (done) => {
    chai.request('http://localhost:9000')
      .get('/api/v1/hello/world')// , (error, response, body) => {
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res).not.to.equal(null);
        expect(res).to.have.status(200);
        done();
      });
  });
});
