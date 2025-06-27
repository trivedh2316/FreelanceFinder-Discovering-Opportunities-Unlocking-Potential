const activeSockets = {};

function handleSocket(io, socket) {
  socket.on('join', (userId) => {
    activeSockets[userId] = socket.id;
  });

  socket.on('sendMessage', ({ senderId, receiverId, text }) => {
    const receiverSocket = activeSockets[receiverId];
    if (receiverSocket) {
      io.to(receiverSocket).emit('receiveMessage', { senderId, text });
    }
  });

  socket.on('disconnect', () => {
    for (const userId in activeSockets) {
      if (activeSockets[userId] === socket.id) {
        delete activeSockets[userId];
        break;
      }
    }
  });
}

export default handleSocket;
