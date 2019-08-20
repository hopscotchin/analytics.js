/*
 Add all integrations you want registered here.
 Integration repos: https://github.com/segment-integrations?utf8=%E2%9C%93&query=analytics.js
 Make sure the integrations added are also installed and saved in the package.json
 */
module.exports = {
  'alexa': require('./analytics.js-integration-alexa/lib'),
  'amplitude': require('./analytics.js-integration-amplitude/lib'),
  'blueshift': require('./analytics.js-integration-blueshift/lib'),
  'segmentio': require('./analytics.js-integration-segmentio/lib'),
  'facebook-pixel': require('./analytics.js-integration-facebook-pixel/lib'),
};
