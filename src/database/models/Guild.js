class Guild {
  constructor(guildId) {
    this.guildId = guildId;
    this.roles = {
      mod: []
    };
    this.channels = {
      modLog: null
    };
    this.settings = {
      messageMultiplier: 1
    };
    this.misc = {
      caseNumber: 1
    };
  }
}

module.exports = Guild;
