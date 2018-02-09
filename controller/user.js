module.exports = {
  async get_user(ctx, svs) {
    svs.userService.get_user();
    ctx.body = 'get user';
  },

  async get_userinfo(ctx, svs) {
    svs.userService.get_userinfo();
    ctx.body = 'get userinfo';
  } 
};