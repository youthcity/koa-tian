const router = require('koa-router');
const fs = require('fs');

const Router = new router();

const set_routers = (app) => {
  const routers = require('./routers')(app);

  Object.keys(routers).forEach((key) => {
    const [method, path] = key.split(' ');
    Router[method](path, routers[key]);
  });

  return Router.routes();
};

module.exports = set_routers;
