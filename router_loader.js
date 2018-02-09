const router = require('koa-router');
const fs = require('fs');

const Router = new router();

const User = require('./router/user');

const scan_dir = () => {
  const url = './router';
  const dir = fs.readdirSync(url);

  dir.forEach((filename) => {
    console.log('filename ', filename);
    const router_model = require(url + '/' + filename);
    add_routers(router_model);
  });

};

const add_routers = (router) => {
  Object.keys(router).forEach((key) => {
    const [request_type, path] = key.split(' ');
    Router[request_type](path, router[key]);
  });
};


const set_routers = () => {
  scan_dir();
  return Router.routes();
};

module.exports = set_routers;
