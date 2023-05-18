const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    'bg-ui': path.resolve(__dirname, '../lib/index'),
  };

  return config;
};
