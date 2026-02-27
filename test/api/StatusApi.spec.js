(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    factory(root.expect, root.MailcowSdkJs);
  }
}(this, function(expect, MailcowSdkJs) {
  'use strict';

  var runApiSpec = require('./_sharedApiSpec');
  runApiSpec(expect, MailcowSdkJs, 'StatusApi');
}));