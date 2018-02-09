const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const KoaRoute = require('koa-router');

class TianLoader {
  loader(path) {
    const dir = fs.readdirSync(path);

    return dir.map((filename) => {
      const module = require(path + '/' + filename);
      return {
        name: filename.split('.')[0],
        module,
      };
    });
  }

  load_controller() {
    const url = path.join(__dirname, '../controller');
    return this.loader(url);
  }

  load_service() {
    const url = path.join(__dirname, '../service');
    return this.loader(url);
  }
}

class Tian extends Koa {
  constructor(props) {
    super(props);
    this.router = new KoaRoute();

    this.loader = new TianLoader();
    const controllers = this.loader.load_controller();
    this.controller = {};

    controllers.forEach((crl) => {
      this.controller[crl.name] = crl.module;
    });
  }

  set_routers() {
    const _set_routers = (app) => {
      const routes = require('../routers')(app);
      const svs = {};
      app.loader.load_service().forEach((service) => {
        svs[service.name] = service.module;
      });

      Object.keys(routes).forEach((key) => {
        const [method, path] = key.split(' ');
        app.router[method](path, (ctx) => {
          const handler = routes[key];
          handler(ctx, svs);
        });
      });

      return app.router.routes();
    };


    this.use(_set_routers(this));
  }
}

module.exports = Tian;