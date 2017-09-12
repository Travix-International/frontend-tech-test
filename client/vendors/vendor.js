/* eslint-disable wrap-iife, no-var, global-require, dot-notation */
// react-dom
(function () {
  var m = require('react-dom');
  if (typeof m.default !== 'undefined') {
    window['ReactDOM'] = m.default;
    return;
  }
  window['ReactDOM'] = m;
})();

// react
(function () {
  var m = require('react');
  if (typeof m.default !== 'undefined') {
    window['React'] = m.default;
    return;
  }
  window['React'] = m;
})();

// rxjs
(function () {
  var m = require('rxjs');
  if (typeof m.default !== 'undefined') {
    window['Rx'] = m.default;
    return;
  }
  window['Rx'] = m;
})();

// frint
(function () {
  var m = require('frint');
  if (typeof m.default !== 'undefined') {
    window['Frint'] = m.default;
    return;
  }
  window['Frint'] = m;
})();

// frint-store
(function () {
  var m = require('frint-store');
  if (typeof m.default !== 'undefined') {
    window['FrintStore'] = m.default;
    return;
  }
  window['FrintStore'] = m;
})();

// frint-model
(function () {
  var m = require('frint-model');
  if (typeof m.default !== 'undefined') {
    window['FrintModel'] = m.default;
    return;
  }
  window['FrintModel'] = m;
})();

// frint-react
(function () {
  var m = require('frint-react');
  if (typeof m.default !== 'undefined') {
    window['FrintReact'] = m.default;
    return;
  }
  window['FrintReact'] = m;
})();

// frint-router
(function () {
  var m = require('frint-router');
  if (typeof m.default !== 'undefined') {
    window['FrintRouter'] = m.default;
    return;
  }
  window['FrintRouter'] = m;
})();

// frint-router-react
(function () {
  var m = require('frint-router-react');
  if (typeof m.default !== 'undefined') {
    window['FrintRouterReact'] = m.default;
    return;
  }
  window['FrintRouterReact'] = m;
})();

// isomorphic-fetch
(function () {
  var fetch = require('isomorphic-fetch');
  if (typeof fetch.default !== 'undefined') {
    window['fetch'] = fetch.default;
    return;
  }
  window['fetch'] = fetch;
})();

// normalizr
(function () {
  var normalizr = require('normalizr');
  if (typeof normalizr.default !== 'undefined') {
    window['normalizr'] = normalizr.default;
    return;
  }
  window['normalizr'] = normalizr;
})();
