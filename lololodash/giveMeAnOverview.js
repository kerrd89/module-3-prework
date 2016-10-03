'use strict';

var _ = require("lodash");

var worker = function(input) {
  var array = [],
  total = 0;
  input = _.groupBy(input, 'article');

  _.forEach(input, function (item, key) {

      key = parseInt(key);
      total = 0;

      if (item.length === 1) {
          total = item[0].quantity;

      } else {
          total = _.reduce(item, function(sum, item) {
              return sum + item.quantity;
          }, 0);
      }

      array.push({
          article: key,
          total_orders: total
      });

    });

    array = _.sortBy(array, "total_orders").reverse();

    return array;
};

module.exports = worker;
