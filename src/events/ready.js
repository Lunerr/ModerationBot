const Constants = require('../utility/Constants.js');
const Logger = require('../utility/Logger.js');

module.exports = (client) => {
  client.on('ready', async () => {
    const connectMsg = ' - Luner\'s Bot has successfully connected.';
    const logMsg = '\n        \\/ Logged Commands \\/';
    Logger.log(connectMsg.green + logMsg.rainbow);
    await client.user.setPresence({ game: { name: Constants.data.misc.game, type: 0 } });
  });
};
