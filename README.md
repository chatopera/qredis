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
