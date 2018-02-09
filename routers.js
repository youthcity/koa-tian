module.exports = (app) => {
  return {
    'get /': app.controller.user.get_user,
    'get /userinfo': app.controller.user.get_userinfo,
  }
};