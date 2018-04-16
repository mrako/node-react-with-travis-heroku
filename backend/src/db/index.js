/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { NODE_ENV } = require('../constants');

const config = require('./config')[NODE_ENV];

console.log('DB init config is ', config);

const sequelize = (config.use_env_variable)
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config);

function findFilesRecursively(dir = path.join(__dirname, 'models'), acc = []) {
  fs.readdirSync(dir)
    .forEach((file) => {
      if (file !== __dirname) {
        if (file.indexOf('.') === -1) {
          findFilesRecursively(path.join(__dirname, file), acc);
        } else if (file.slice(-3) === '.js') {
          acc.push(path.join(dir, file));
        }
      }
    });
  return acc;
}

const db = {
  Sequelize,
  sequelize,
};
const models = {};
findFilesRecursively().forEach((localPath) => {
  console.log({ localPath });
  const model = sequelize.import(localPath);
  console.log('Adding model', model.name);
  models[model.name] = model;
});

db.sequelize.sync = async function sync() {
  console.log('NEW SYNC BEGIN');
};
Object.assign(db, models);

module.exports = db;
