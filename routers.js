module.exports = (app) => {
  return {
    'get /': app.controller.user.get_user,
  }
};