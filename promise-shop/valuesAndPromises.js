'use strict';

function attachTitle(firstArgument) {
  return ('DR. ' + firstArgument);
}

var promise = Promise.resolve('MANHATTAN');

promise.then(attachTitle).then(console.log);
