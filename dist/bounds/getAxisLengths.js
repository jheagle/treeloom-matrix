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
 * Return point-like object with all of the axis lengths.
 * @param matrix - The matrix to get the dimensions of.
 */
const getAxisLengths = matrix => (0, point_1.default)(matrix.children[0].children[0].children.length, matrix.children[0].children.length, matrix.children.length);
exports.default = getAxisLengths;