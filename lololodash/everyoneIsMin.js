'use strict';

var _ = require("lodash");

var worker = function(input) {
  var answer = {
    hot: [],
    warm: []
  };

  function checktemperature(temp) {
    return (temp > 19);
  }



  _.forEach(input, function(town, townname) {
    if (_.every(town, checktemperature)) {
      answer.hot.push(townname);
    } else if (_.some(town, checktemperature)) {
      answer.warm.push(townname);
    }
  });
  return answer;
};

module.exports = worker;
