const Koa = require('koa');
const rotuer = require('koa-router');

const app = new Koa();
const Rotuer = new rotuer();

Rotuer.get('/', (ctx, next) => {
  ctx.body = 'hello';
});

app.use(Rotuer.routes());

app.listen(3000);