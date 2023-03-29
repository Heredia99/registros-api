"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _http = _interopRequireDefault(require("http"));
var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var port = process.env.PORT || 8080;
var server = _http["default"].createServer(_app["default"]);
server.listen(port, function () {
  console.log("Servidor abierto en localhost:".concat(port));
});
var _default = server;
exports["default"] = _default;