'use strict';

var _ = require("lodash");

var worker = function(input) {
  input = _.sortBy(input, "income");

  let totalIncome = _.reduce(input, function(sum, num) {
    return sum + num.income;
  }, 0);

  let averageIncome = totalIncome / input.length;

  let underperform = _.filter(input, function(num) {
    return num.income <= averageIncome;
  });

  let overperform = _.filter(input, function(num) {
    return num.income > averageIncome;
  });

  return  {
    average: averageIncome,
    underperform: underperform,
    overperform: overperform
  };


};

module.exports = worker;
