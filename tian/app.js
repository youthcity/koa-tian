const Tian = require('./core');
const app = new Tian();

app.set_routers();
app.listen(3000, () => {
  console.log('启动....');
});