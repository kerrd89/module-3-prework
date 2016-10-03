'use strict';

var _ = require("lodash");

var worker = function(input) {
  return _.sortBy(input,"quantity").reverse();
};

module.exports = worker;
