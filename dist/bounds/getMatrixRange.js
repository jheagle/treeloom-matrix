"use strict";

require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.reduce.js");
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const getAllPoints_1 = __importDefault(require("./getAllPoints"));
const si_funciona_1 = __importDefault(require("si-funciona"));
/**
 * Get the lowest and highest points in the matrix as the range.
 * @param matrix - The matrix to find the range of.
 * @returns The lowest point followed by the highest point (empty when the matrix has no points)
 */
const getMatrixRange = matrix => (0, getAllPoints_1.default)(matrix).reduce((range, point) => {
  if (range.length === 0) {
    range.push(si_funciona_1.default.cloneObject(point), si_funciona_1.default.cloneObject(point));
  }
  if (point.x < range[0].x) {
    range[0].x = point.x;
  }
  if (point.y < range[0].y) {
    range[0].y = point.y;
  }
  if (point.z < range[0].z) {
    range[0].z = point.z;
  }
  if (point.x > range[1].x) {
    range[1].x = point.x;
  }
  if (point.y > range[1].y) {
    range[1].y = point.y;
  }
  if (point.z > range[1].z) {
    range[1].z = point.z;
  }
  return range;
}, []);
exports.default = getMatrixRange;