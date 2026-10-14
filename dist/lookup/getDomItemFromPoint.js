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
const checkValidPoint_1 = __importDefault(require("../bounds/checkValidPoint"));
/**
 * Retrieve the DomItem associated with the provided point
 * @param pnt - A point corresponding to a DomItem.
 * @param matrix - The matrix containing the point.
 * @returns The DomItem (a column), or false when the point is not in the matrix
 */
const getDomItemFromPoint = (pnt, matrix) => (0, checkValidPoint_1.default)(pnt, matrix) ? matrix.children[pnt.z].children[pnt.y].children[pnt.x] : false;
exports.default = getDomItemFromPoint;