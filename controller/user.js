module.exports = {
  async get_user(ctx, next) {
    ctx.body = 'get user';
  },

  async get_userinfo(ctx, next) {
    ctx.body = 'get userinfo';
  } 
};