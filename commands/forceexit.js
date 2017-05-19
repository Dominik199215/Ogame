const channelTracker = require('../util/channelTracker.js')

module.exports = function(bot, message) {
  if (channelTracker.hasActiveMenus(message.channel.id)) {
    channelTracker.removeCollector(message.channel.id);
    message.channel.send(`Successfully cleared this channel from active status.`);
  }
}