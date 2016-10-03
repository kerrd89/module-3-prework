'use strict';

var promise;

promise = Promise.resolve('PROMISE VALUE');
promise.then(console.log);
promise.catch(console.log('potatoe'))
