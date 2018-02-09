const Koa = require('koa');
const rotuer = require('koa-router');

const set_routers = require('./router_loader');
const controller_loader = require('./controller_loader');

const controllers = controller_loader();
Koa.prototype['controller'] = {};
controllers.forEach((item) => {
  Koa.prototype.controller[item.name] = item.controller;
});

const app = new Koa();
const Rotuer = new rotuer();

app.use(set_routers(app));

app.listen(3000);