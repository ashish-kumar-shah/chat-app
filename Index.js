const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express(); 
const server = http.createServer(app);
const io = new Server(server);

const users = {}; // Store users with their socket IDs
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'Public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public','Index.html'));
});

io.on('connection', (socket) => {
    socket.on('register', (username) => {
        users[socket.id] = username;
        io.emit('user list', Object.values(users)); // Send updated user list to all clients
    });

    socket.on('private message', ({ to, message }) => {
        const recipientSocketId = Object.keys(users).find(id => users[id] === to);
        if (recipientSocketId) {
            io.to(recipientSocketId).emit('private message', { from: users[socket.id], message });
        }
    });

    socket.on('disconnect', () => {
        delete users[socket.id];
        io.emit('user list', Object.values(users)); // Send updated user list to all clients
    });
});

server.listen(80, () => {
    console.log('Server running on http://localhost:80');
});
