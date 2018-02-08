const router = require('koa-router');
const Router = new router();

const User = require('./router/user');

const add_routers = (router) => {
  Object.keys(router).forEach((key) => {
    const [request_type, path] = key.split(' ');
    Router[request_type](path, router[key]);
  });
};


const set_routers = () => {
  add_routers(User);

  return Router.routes();
};

module.exports = set_routers;
