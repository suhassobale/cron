var cron = require('node-cron');
cron.schedule('*/2 * * * * *', () => {
  console.log('running every minute 1, 2, 4 and 5');
});