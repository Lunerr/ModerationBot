<div align="center">
    <a href="https://david-dm.org/Marathxnz/ModerationBot"><img src="https://david-dm.org/Marathxnz/DEA2-Better.svg" alt="Dependencies" /></a>
</div>

[Full documentation](https://marathxnz.github.io/ModerationBot/)

[Add ModerationBot to your Server](https://discordapp.com/api/oauth2/authorize?client_id=346848517186125834&scope=bot&permissions=8)

[Official Support Server](https://discord.gg/Rvm7cKj)
## Moderation
ModerationBot has one of the most detailed and efficient moderation systems. On top of features such as automatic unmutes and custom set moderator roles, there are moderation logs, to keep up with everything your mods are doing. Keep in mind these features are fully optional, and will not in anyway affect the functionality of the bot if they are not set.
## Self Hosting
First and foremost, you must download the files of this repository, and place them in a dedicated folder.

In order to host ModerationBot, a connection to either a local or hosted MongoDB database is required as the large majority of the commands depends on the database storage. The best site for free MongoDB hosting with easy setup: https://mlab.com/. Simply sign up, create a single node database. Once the database is created, you must create a `Database User` in the database which will be used for the connection URL.

Once this is done, you must create a credentials.json file, with the following format:
```json
{
  "token": "enter bot token here",
  "ownerIds": ["290820869964431360"],
  "mongodbConnectionURL": "mongodb://dbUsername:dbPassword@ConnectionURL/DatabaseName"
}
```
The connection URL will be provided to you when viewing the database. All you need to do is create a `Database User` and fill in the blanks. This file must be placed in the `src` folder and will by default be gitignored, to prevent any accidental commits of your token.

Once this is done, follow the these steps:

1. Install the current node.js: https://nodejs.org/

2. Install git: https://git-scm.com/download/win
    
3. Open command prompt inside of the ModerationBot folder: http://bit.ly/2uIXO4p
    
4. Enter `npm install --no-optional`
    
5. Enter `node src/index.js`
    
6. ENJOY!

# Credits
A lot of credit goes towards vim2meta#3630 as this bot is made off of his bot DEA.