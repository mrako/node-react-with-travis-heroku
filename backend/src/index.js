/* eslint-disable no-console */
/* eslint-disable-next-line global-require */
if (process.env.NODE_ENV !== 'production') { require('dotenv').config(); }
const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const publicRouter = require('./publicRouter');
const db = require('./db');
const { PORT } = require('./constants');

const koa = new Koa();

koa.use(publicRouter.routes());
koa.use(serve(path.join(__dirname, 'dist/')));
const dbinit = () => db.sequelize.sync({ force: false }).then(() => console.log('*** DB synced ***'));
dbinit();
const app = koa.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${process.env.PORT || PORT}`));

module.exports = {
  app,
  dbinit,
};

