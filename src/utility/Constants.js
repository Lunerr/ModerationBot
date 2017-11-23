class Constants {
  constructor() {
    this.data = {
      colors: {
        ban: [234, 12, 0],
        clear: [0, 29, 255],
        defaults: [
          [255, 38, 154],
          [0, 255, 0],
          [0, 232, 40],
          [8, 248, 255],
          [242, 38, 255],
          [255, 28, 142],
          [104, 255, 34],
          [255, 190, 17],
          [41, 84, 255],
          [150, 36, 237],
          [168, 237, 0]
        ],
        chill: [255, 92, 17],
        error: [255, 0, 0],
        kick: [232, 81, 31],
        mute: [255, 114, 14],
        unban: [19, 255, 25],
        unmute: [109, 237, 94],
        unchill: [91, 283, 53],
        warn: [255, 182, 32]
      },

      links: {
        botInvite: 'https://discordapp.com/api/oauth2/authorize?client_id=346848517186125834&scope=bot&permissions=8',
        documentation: 'https://marathxnz.github.io/ModerationBot/commands/',
        serverInvite: 'https://discord.gg/Rvm7cKj'
      },

      misc: {
        disabledEvents: [
          'CHANNEL_PINS_UPDATE',
          'MESSAGE_UPDATE',
          'MESSAGE_REACTION_ADD',
          'MESSAGE_REACTION_REMOVE',
          'MESSAGE_REACTION_REMOVE_ALL',
          'VOICE_STATE_UPDATE',
          'TYPING_START',
          'VOICE_SERVER_UPDATE',
          'RELATIONSHIP_ADD',
          'RELATIONSHIP_REMOVE'
        ],
        game: '$help',
        prefix: '$',
        botOwner: 'Luner#0059',
        botOwnerID: 226736342745219072
      },

      regexes: {
        capitalize: /\w\S*/g,
        escape: /[-[\]{}()*+?.,\\/^$|#\s]/g,
        prefix: /^\$/
      }
    };

    this.config = {
      chill: {
        max: 120,
        min: 5,
        defaultValue: 30
      },

      clear: {
        max: 100,
        min: 2
      },

      intervals: {
        autoUnmute: 60000
      },

      mute: {
        defaultLength: 24
      }
    };

    this.towers = {
      chipper: {
        price: 440,
        leftside: {
          tier1: 150,
          tier2: 250,
          tier3: 500,
          tier4: 4000
        },
        rightside: {
          tier1: 200,
          tier2: 400,
          tier3: 2500,
          tier4: 4000
        }
      }
    };

    this.conversions = {
      secondInMs: 1000,
      minuteInMs: 60000,
      hourInMs: 3600000,
      dayInMs: 86400000,
      weekInMs: 604800000,
      monthInMs: 2592000000,
      yearInMs: 31536000000,
      decadeInMs: 315360000000,
      centuryInMs: 3153600000000
    };
  }
}

module.exports = new Constants();
