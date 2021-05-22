process.on('message', (message) => {
  console.log('--------> child: message:', message.text);
  process.send({
    text: 'message from child',
  })
});