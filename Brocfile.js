/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  name: require('./package.json').name,

  minifyCSS: {
    enabled: true,
    options: {}
  },

  getEnvJSON: require('./config/environment')
});

// Use this to add additional libraries to the generated output files.
app.import('vendor/ember-data/ember-data.js');

// Foundation js libarary
app.import('vendor/foundation/js/foundation.js');

// Hammerjs for gestures
app.import('vendor/hammerjs/hammer.js');

// Ember Animate
app.import('vendor/ember-animate/ember-animate.js');

// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.
app.import('vendor/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});



var tree = app.toTree();

// Autoprefixer CSS post processing
var autoprefixer = require('broccoli-autoprefixer');
// tree = autoprefixer(tree, options);
tree = autoprefixer(tree);

module.exports = tree;

