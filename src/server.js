const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const server = express();
const config = require('config');
const socketio = require('socket.io');
const { Server } = require('http');
require('./utils/schedule');

if (config.get('mongo_db').habilitado) {
    require('./database/mongodb')(config.get('mongo_db').host, config.get('mongo_db').database);
}
if (config.get('postgres').habilitado) {
    require('./database/pgsql');
}

const http = Server(server);
const io = socketio(http);

server.use(express.json());
server.use(cors());
server.use('/v1', routes);

io.on('conection', data => {
    console.log(data);
});

module.exports = server;
