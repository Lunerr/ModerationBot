const MongoClient = require('mongodb').MongoClient;
const GuildRepository = require('../repositories/GuildRepository.js');
const MuteRepository = require('../repositories/MuteRepository.js');
const BlacklistRepository = require('../repositories/BlacklistRepository.js');

class Database {
  constructor() {
    this.queries = {
      Blacklist: require('../queries/BlacklistQuery.js'),
      Guild: require('../queries/GuildQuery.js'),
      Id: require('../queries/IdQuery.js'),
      Mute: require('../queries/MuteQuery.js')
    };

    this.updates = {
      Pull: require('../updates/PullUpdate.js'),
      Push: require('../updates/PushUpdate.js')
    };

    this.models = {
      Blacklist: require('../models/Blacklist.js'),
      Guild: require('../models/Guild.js'),
      Mute: require('../models/Mute.js')
    };
  }

  async connect(connectionURL) {
    const db = await MongoClient.connect(connectionURL);

    this.blacklistRepo = new BlacklistRepository(await db.createCollection('blacklists'));
    this.guildRepo = new GuildRepository(await db.createCollection('guilds'));
    this.muteRepo = new MuteRepository(await db.createCollection('mutes'));

    await db.collection('blacklists').createIndex('userId', { unique: true });
    await db.collection('guilds').createIndex('guildId', { unique: true });
  }
}

module.exports = Database;
