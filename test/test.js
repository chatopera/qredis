const test = require('ava');
const redis = require('redis');
const client = redis.createClient();


var redisq = require('../index')(client);


test.cb('Philly Redis Test#set', t => {
    redisq.set('s1', 'hello')
        .then(function(result) {
            console.log(result);
            t.pass();
            t.end();
        }, function(err) {
            t.fail(JSON.stringify(err));
            t.end();
        });
});

test.cb('Philly Redis Test#get', t => {
    redisq.get('s1')
        .then(function(result) {
            console.log(result);
            t.pass();
            t.end();
        }, function(err) {
            t.fail(JSON.stringify(err));
            t.end();
        });
});
