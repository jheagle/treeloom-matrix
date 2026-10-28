"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const point_1 = __importDefault(require("../point/point"));
/**
 * Retrieve the point associated with the provided element.
 * @param elem - Provide an element associated with a point.
 */
const getPointFromElement = elem => {
  if (typeof elem.parentNode?.parentNode?.parentNode?.childNodes === 'undefined') {
    // This seems unlikey to occur because there will be document items as parents
    throw Error('Invalid element or not an element representing a matrix point.');
  }
  // The checks above confirm each of these parents exists
  const row = elem.parentNode;
  const layer = row.parentNode;
  const matrix = layer.parentNode;
  return (0, point_1.default)(Array.from(row.childNodes).indexOf(elem), Array.from(layer.childNodes).indexOf(row), Array.from(matrix.childNodes).indexOf(layer));
};
exports.default = getPointFromElement;