'use strict';

var moment = require('moment');

console.log(moment().format());

let now = moment();
console.log('Current timestamp', now.unix());

let timestamp = 1477139069;
let currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
