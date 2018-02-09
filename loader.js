const fs = require('fs');
const path = require('path');

function load(url) {
  const dir = fs.readdirSync(url);

  return dir.map((filename) => {
    const module = require(url + '/' + filename);
    return {
      name: filename.split('.')[0],
      module,
    }
  });
}

function load_controller() {
  const url = path.join(__dirname + '/controller');
  return load(url);
}

function load_service() {
  const url = path.join(__dirname + '/service');
  return load(url);
}

module.exports = {
  load_controller,
  load_service,
};