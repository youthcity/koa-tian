const fs = require('fs');

const load_controller = () => {
  const url = './controller';
  const dir = fs.readdirSync(url);

  return dir.map((filename) => {
    const controller = require(url + '/' + filename);
    return {
      name: filename.split('.')[0],
      controller,
    };
  });
};

module.exports = load_controller;