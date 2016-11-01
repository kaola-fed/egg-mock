'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function(agent) {
  const done = agent.readyCallback('agent:agent');
  const p = path.join(__dirname, 'run/test.txt');
  fs.writeFile(p, '123', done);
};
