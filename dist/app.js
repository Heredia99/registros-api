"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _recordRoutes = _interopRequireDefault(require("./routes/recordRoutes"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _db = require("./config/db");
var _dotenv = require("dotenv");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _dotenv.config)();
var app = (0, _express["default"])();
(0, _db.connect)().then(function () {
  app.use(_bodyParser["default"].urlencoded({
    extended: false
  }));
  app.use(_bodyParser["default"].json());
  app.get('/', function (req, res) {
    res.sendFile(_path["default"].join(__dirname, '../public', 'index.html'));
  });
  app.use('/records', _recordRoutes["default"]);
});
var _default = app;
exports["default"] = _default;