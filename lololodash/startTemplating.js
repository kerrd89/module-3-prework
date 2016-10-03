'use strict';

var _ = require("lodash");

var worker = function (inputvar) {

    var mytemplate = "Hello <%= name %> (logins: <%= login.length %>)";

    return _.template(mytemplate)(inputvar);
};

module.exports = worker;
