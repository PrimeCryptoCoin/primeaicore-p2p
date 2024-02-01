'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on primeaicore-p2p Module {0}'
};

module.exports = require('primeaicore-lib').errors.extend(spec);
