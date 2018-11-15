# QREDIS

Get a promised redis client.

```
var qredis = require('qredis')({options});

qredis.set('s1', 'hello')
    .then(function(result) {
        console.log(result);
    }, function(err) {
    });
```

Get redis commands in [redis-commmands](https://github.com/NodeRedis/redis-commands/blob/master/commands.json) module.

Get `options` in [redis](https://www.npmjs.com/package/redis#options-object-properties).


## Test
```
git clone https://github.com/Samurais/qredis.git
cd qredis
npm install
ava
```
