"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _recordController = require("../controllers/recordController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post('/', _recordController.store);
router.get('/', _recordController.list);
router.get('/:id', _recordController.show);
var _default = router;
exports["default"] = _default;