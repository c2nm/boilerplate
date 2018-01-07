'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      msg: 'Vue!'
    };
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"test\">\n  <h1>{{ msg }}</h1>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-3a8bde5d", module.exports)
  } else {
    hotAPI.update("_v-3a8bde5d", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}