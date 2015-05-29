/**
 *
 *   React-Skylighter
 * 
 *   Copyright (c) 2015 Daniel Kurashige-Gollub <daniel@kurashige-gollub.de>
 *   The MIT License (MIT)
 *
 *   Based on React-Skylight (https://github.com/marcio/react-skylight)
 *   Copyright (c) 2014 Marcio Gasparotto
 *   The MIT License (MIT)
 *
 **/

// To support older browsers (IE8, I am looking at you), we need some poylfills.... sigh

var es5shim = require("es5-shim"),
    html5shiv = require("../../node_modules/html5shiv/dist/html5shiv.js");

var polyfill = {
	es5shim: es5shim,
	html5shiv: html5shiv,
};

if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

// Console-polyfill. MIT license.
// https://github.com/paulmillr/console-polyfill
// Make it safe to do console.log() always.
(function(global) {
  'use strict';
  global.console = global.console || {};
  var con = global.console;
  var prop, method;
  var empty = {};
  var dummy = function() {};
  var properties = 'memory'.split(',');
  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
  while (prop = properties.pop()) if (!con[prop]) con[prop] = empty;
  while (method = methods.pop()) if (!con[method]) con[method] = dummy;
})(typeof window === 'undefined' ? this : window);


module.exports = polyfill;

