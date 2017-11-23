All commands are catagorized by groups. Each of the following sections is a group.

The syntax of the command usage is:

`Optional paramater: []`

`Required paramater: <>`

##Table Of Contents
- [Administration](#administration)
- [Botowners](#botowners)
- [General](#general)
- [Moderation](#moderation)
- [Owners](#owners)
- [System](#system)

### Administration

These commands may only be used by a user with the set mod role with a permission level of 2 or the Administrator permission.

Command | Description | Usage
---------------- | --------------| -------
Setmodlog|Sets the mod log channel.|`$setmodlog <#channel>`
Setmutedrole|Sets the muted role.|`$setmutedrole <@role>`

### Botowners

These commands may only be used by the owners of DEA.

Command | Description | Usage
---------------- | --------------| -------
Blacklist|Blacklists user from your server, but doesn't ban him.|`$blacklist [@user]`
Eval|Evalute JavaScript code.|`$eval <code>`
Unblacklist|Remove's blacklist on stated user.|`$unblacklist [@user]`

### General

These commands aren't used with money.

Command | Description | Usage
---------------- | --------------| -------
Modroles|View all mod roles in this guild.|`$modroles`

### Moderation

These commands may only be used by a user with the set mod role with a permission level of 1 or the Administrator permission.

Command | Description | Usage
---------------- | --------------| -------
Ban|Swing the ban hammer on any member.|`$ban <@user> [reason]`
Clear|Clear up to 100 messages in any text channel.|`$clear <quantity> [reason]`
Kick|Kick any member.|`$kick <@member> [reason]`
Mute|Mute any member.|`$mute <@member> [quantity of hours] [reason]`
Unban|Lift the ban hammer on any member.|`$unban <user> [reason]`
Unmute|Unmute any member.|`$unmute <@member> [reason]`
Warn|Warn any member.|`$warn <@member> [reason]`

### Owners

These commands may only be used by a user with the set mod role with a permission level of 3 or the ownership of the server.

Command | Description | Usage
---------------- | --------------| -------
Addmodrole|Add a mod role.|`$addmodrole <@role> <permissionLevel>`
Configuremodrole|Add a mod role.|`$configuremodrole <@role> <permissionLevel>`
Removemodrole|Remove a mod role.|`$removemodrole <@role>`

### System

These commands are the normal bot commands.

Command | Description | Usage
---------------- | --------------| -------
Help|All command information.|`$help [command]`
Info|All the information about the cash system.|`$info`
Invite|Add Bot to your server.|`$invite`
Modules|All modules.|`$modules [module]`
Statistics|Statistics about this bot.|`$statistics`
