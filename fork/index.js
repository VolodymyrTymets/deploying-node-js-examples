const fork = require('child_process').fork;
const cp = fork('./child.js');

cp.on('message', (message) => {
  console.log('--------> parent: message:', message.text);
  process.exit();
});

cp.send({
  text: 'message from parent',
});