npm install node-cron

PM2 is a process manager for Node.js applications. Among it's other useful characteristics, the most useful part of it is that it brings your Node process back to life if it crashes for any reason. If you have a long running cron process going on a machine, this is a useful superpower to have. 


npm install pm2 -g
pm2 start app.js

pm2 list
