'use strict'

var ioEvents = function(io){
    io.on('connection', function (socket) {
        console.log('Socket connected')
    })
}

var init = function(app){
    const server = require('http').Server(app),
        io = require('socket.io')(server),
        mongoose = require('mongoose')
    
    ioEvents(io)
    mongoose.connect('mongodb://localhost/namedb',()=>{
        console.log('Mongodb connect!');
    })
    return server
}

module.exports = init