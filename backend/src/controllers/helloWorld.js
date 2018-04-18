const Router = require('koa-router');
const db = require('../db');

const hello = () => async (ctx) => {
  ctx.body = 'Hello World from backend';
};
const router = new Router()
  .get('/world', hello());

module.exports = {
  router,
};
