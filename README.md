1.npm install node-cron

2.var cron = require('node-cron');
cron.schedule('*/2 * * * * *', () => {
  console.log('running every minute 1, 2, 4 and 5');
});

3.PM2 is a process manager for Node.js applications. Among it's other useful characteristics, the most useful part of it is that it brings your Node process back to life if it crashes for any reason. If you have a long running cron process going on a machine, this is a useful superpower to have. 

4.npm install pm2 -g

5.pm2 start cron.js

6.pm2 list
