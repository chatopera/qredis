/**
 * Expose redis commands as Promise
 */

const qind = require("qind"),
  debug = require("debug")("qredis"),
  // https://github.com/NodeRedis/redis-commands/blob/master/commands.json
  commands = require("./commands.json"),
  redis = require("redis");

/**
 * Config 配置
 * https://www.npmjs.com/package/redis#options-object-properties
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
exports = module.exports = (config) => {
  const client = redis.createClient(config);

  client.on("connect", () => {
    debug("Redis Client connected.");
  });

  client.on("error", (err) => {
    console.log("Redis Client error", err);
  });

  let cli = {};
  for (let i in commands) {
    cli[i] = qind(client[i], client);
  }
  return cli;
};
