const patron = require('patron.js');
const Constants = require('../../utility/Constants.js');

class Modules extends patron.Command {
  constructor() {
    super({
      names: ['modules', 'module'],
      groupName: 'system',
      description: 'View all modules or a modules information.',
      guildOnly: false,
      args: [
        new patron.Argument({
          name: 'module',
          key: 'module',
          type: 'string',
          defaultValue: '',
          example: 'administrator'
        })
      ]
    });
  }

  async run(msg, args) {
    if (String.isNullOrWhiteSpace(args.module)) {
      let message = '';

      for (let i = 0; i < msg.client.registry.groups.length; i++) {
        message += msg.client.registry.groups[i].name.upperFirstChar() + ', ';
      }

      return msg.channel.createMessage(message.substring(0, message.length - 2) + '.');
    } else {
      args.module = args.module.startsWith(Constants.data.misc.prefix) ? args.module.slice(Constants.data.misc.prefix.length) : args.module;

      const lowerInput = args.module.toLowerCase();

      const module = msg.client.registry.groups.find((x) => x.name === lowerInput);

      if (module === undefined) {
        return msg.createErrorReply('This module does not exist.');
      }

      let message = '**Module Name:** ' + module.name.upperFirstChar() + '\n**Description**: ' + module.description + '\n';

      for (let i = 0; i < module.commands.length; i++) {
        message += '**Command:** ' + module.commands[i].names[0].upperFirstChar() + '\n' + '**Description:** ' + module.commands[i].description + '\n';
      }

      return msg.channel.createMessage(message);
    }
  }
}

module.exports = new Modules();
