"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var locationSchema = new _mongoose.Schema({
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
});
var recordSchema = new _mongoose.Schema({
  reference: {
    type: String,
    required: true,
    index: true
  },
  location: {
    type: locationSchema,
    required: true
  },
  comments: [String],
  pressure: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    "default": Date.now
  }
});
var _default = (0, _mongoose.model)('Record', recordSchema);
exports["default"] = _default;