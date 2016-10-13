# QREDIS

Get a promised redis client.

```
const redis = require('redis');
const client = redis.createClient();
var qredis = require('qredis')(client);

qredis.set('s1', 'hello')
    .then(function(result) {
        console.log(result);
    }, function(err) {
    });
```


Get redis commands in [redis-commmands](https://github.com/NodeRedis/redis-commands/blob/master/commands.json) module.
