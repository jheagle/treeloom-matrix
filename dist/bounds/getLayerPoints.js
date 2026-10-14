"use strict";

require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.filter.js");
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
require("core-js/stable");
const getAllPoints_1 = __importDefault(require("./getAllPoints"));
/**
 * Return just the points on one z-layer of the matrix - the same points getAllPoints would find, filtered down to
 * a single layer. A convenience for the repeated getAllPoints(matrix).filter(p => p.z === z) pattern.
 * @param matrix - The matrix (or any level of it) to retrieve points from.
 * @param z - The layer to keep points from.
 */
const getLayerPoints = (matrix, z) => (0, getAllPoints_1.default)(matrix).filter(point => point.z === z);
exports.default = getLayerPoints;