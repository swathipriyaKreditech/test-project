'use strict';
require('babel-core/register');
const Hapi=require('hapi');
// Create a server with a host and port
const server=Hapi.server({
    host: 'localhost',
    port: 8000
});

server.route({
    method: 'GET',
    path: '/login/{username}',
    handler: (request, h) => {
        let status=validateuser(request.params.username);
        return h.response().code(status)
    }
});

server.route({
    method: 'GET',
    path: '/Profile',
    handler: (request, h) => {
        return h.response({name: "swathi"}).code(200)

    }
});

const validateuser = function (username) {
    console.log(username);
    if(username == 'swathi') {
         return 200;
    }
    return 404;
};

server.method({
    name: 'validateuser',
    method: validateuser,
    options: {}
});

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
}
start();
