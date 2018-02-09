const Koa = require('koa');
const rotuer = require('koa-router');

const set_routers = require('./router_loader');
const load_controller = require('./loader').load_controller;

const controllers = load_controller();
Koa.prototype['controller'] = {};
controllers.forEach((item) => {
  Koa.prototype.controller[item.name] = item.module;
});

const app = new Koa();
const Rotuer = new rotuer();

app.use(set_routers(app));

app.listen(3000);