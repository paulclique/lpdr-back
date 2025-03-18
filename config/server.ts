module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['U3ANSNScnkCkVaB7y8562g89kUq87s', 'gPSjkCJe7n8Zc6GtFL44m37z666NvE'])
  }
});
