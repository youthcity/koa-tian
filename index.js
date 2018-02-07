const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello koa';
});

app.listen(3000);