"use strict"

var Worker = require("basic-distributed-computation").Worker;

class RM extends Worker {
  constructor(parent){
    super("rm", parent);
  }

  work(req, inputKey, outputKey){
    if(inputKey){
      delete req.body[inputKey];
    } else {
      req.body = {};
    }
    req.next();
  }
}

module.exports = RM;
