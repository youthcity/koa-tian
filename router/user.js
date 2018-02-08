const get_user = (ctx, next) => {
  ctx.body = 'get_user';
};

const get_user_info = (ctx, next) => {
  ctx.body = 'get_user_info';
};

module.exports = {
  'get /': get_user,
  'get /getUserInfo': get_user_info,
};