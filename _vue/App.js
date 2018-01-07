var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\nbody {\n  font-family: Helvetica, sans-serif;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Test = require('./Test');

var _Test2 = _interopRequireDefault(_Test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Test: _Test2.default
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div id=\"vue\">\n  Hello\n  <test></test>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\nbody {\n  font-family: Helvetica, sans-serif;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-a92b3cb4", module.exports)
  } else {
    hotAPI.update("_v-a92b3cb4", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}