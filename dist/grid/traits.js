"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasTrait = void 0;
require("core-js/stable");
const json_dom_1 = __importDefault(require("json-dom"));
/**
 * The typed version of json-dom's hasTrait, it narrows an item to the trait it was checked for.
 */
exports.hasTrait = json_dom_1.default.hasTrait;
json_dom_1.default.defineTrait('matrix.matrix', {
  keys: []
});
json_dom_1.default.defineTrait('matrix.layer', {
  keys: ['axis']
});
json_dom_1.default.defineTrait('matrix.row', {
  keys: ['axis']
});
json_dom_1.default.defineTrait('matrix.column', {
  keys: ['axis', 'point']
});