/**
* Expose redis commands as Promise
*/

const Q = require('q'),
    _ = require('lodash'),
    commands = require('./commands.json');

exports = module.exports = (client) => {
    let keys = _.keys(commands);
    let cli = {};
    _.each(keys, (val)=>{
        cli[val] = Q.nbind(client[val], client)
    });
    return cli;
}
