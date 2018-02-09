const router = require('koa-router');
const fs = require('fs');

const services = require('./loader').load_service();

const Router = new router();
const svs = {};

services.forEach((service) => {
  svs[service.name] = service.module;
});

const set_routers = (app) => {
  const routers = require('./routers')(app);

  Object.keys(routers).forEach((key) => {
    const [method, path] = key.split(' ');
    Router[method](path, (ctx) => {
      const handler = routers[key];
      handler(ctx, svs);
    });
  });

  return Router.routes();
};

module.exports = set_routers;
