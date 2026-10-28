"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Measure a matrix and check points against it: axis lengths, ranges, valid points and the points around a point.
 */
const adjacentEdgePoints_1 = __importDefault(require("./adjacentEdgePoints"));
const adjacentPoints_1 = __importDefault(require("./adjacentPoints"));
const checkValidPoint_1 = __importDefault(require("./checkValidPoint"));
const getAllPoints_1 = __importDefault(require("./getAllPoints"));
const getAvailableRanges_1 = __importDefault(require("./getAvailableRanges"));
const getAxisLengths_1 = __importDefault(require("./getAxisLengths"));
const getCoordinateRanges_1 = __importDefault(require("./getCoordinateRanges"));
const getLayerPoints_1 = __importDefault(require("./getLayerPoints"));
const getMatrixRange_1 = __importDefault(require("./getMatrixRange"));
exports.default = {
  adjacentEdgePoints: adjacentEdgePoints_1.default,
  adjacentPoints: adjacentPoints_1.default,
  checkValidPoint: checkValidPoint_1.default,
  getAllPoints: getAllPoints_1.default,
  getAvailableRanges: getAvailableRanges_1.default,
  getAxisLengths: getAxisLengths_1.default,
  getCoordinateRanges: getCoordinateRanges_1.default,
  getLayerPoints: getLayerPoints_1.default,
  getMatrixRange: getMatrixRange_1.default
};