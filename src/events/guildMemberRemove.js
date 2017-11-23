const db = require('../database');
const MemberService = require('../services/MemberService.js');

module.exports = (client) => {
  client.on('guildMemberRemove', async (member) => {
  });
};
