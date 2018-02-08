const Koa = require('koa');
const rotuer = require('koa-router');

const set_routers = require('./router_loader');

const app = new Koa();
const Rotuer = new rotuer();

console.log(set_routers);

app.use(set_routers());

app.listen(3000);