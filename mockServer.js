// mockServer.js
import { Server } from 'socket.io';
const io = new Server(3000, {
    cors: {
      origin: '*',
    },
  });
  
  setInterval(() => {
    const messages = [
      'User Alice logged in at 12:01 PM',
      'User Bob uploaded a file at 12:03 PM',
      'User Charlie logged out at 12:05 PM',
    ];
    const message = messages[Math.floor(Math.random() * messages.length)];
    io.emit('activity', message);
  }, 2000);
  