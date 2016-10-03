'use strict';

var _ = require("lodash");

var worker = function(input) {
  return _.chain(input)
  .map(function (item) {
      return item + 'CHAINED';
    })
  .map(function (item) {
      return item.toUpperCase();
    })
    .sortBy()
    .value();
};

module.exports = worker;
