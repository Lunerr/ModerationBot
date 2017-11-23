const patron = require('patron.js');

class System extends patron.Group {
  constructor() {
    super({
      name: 'system',
      description: 'These commands are the normal bot commands.'
    });
  }
}

module.exports = new System();
