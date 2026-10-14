"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
require("core-js/stable");
const getDomItemFromPoint_1 = __importDefault(require("./getDomItemFromPoint"));
const getPointFromElement_1 = __importDefault(require("./getPointFromElement"));
/**
 * Retrieve the DomItem associated with the provided element in the matrix
 * @param elem - Provide an element having an associated DomItem.
 * @param matrix - The matrix potentially containing the DomItem with Point.
 * @returns The DomItem (a column), or false when the element is not in the matrix
 */
const getDomItemFromElement = (elem, matrix) => (0, getDomItemFromPoint_1.default)((0, getPointFromElement_1.default)(elem), matrix);
exports.default = getDomItemFromElement;