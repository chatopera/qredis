/**
* Expose redis commands as Promise
*/

const Q = require('q'),
    // https://github.com/NodeRedis/redis-commands/blob/master/commands.json
    commands = require('./commands.json');

exports = module.exports = (client) => {
    let cli = {};
    for (let i in commands){
        cli[i] = Q.nbind(client[i], client);
    }
    return cli;
}
