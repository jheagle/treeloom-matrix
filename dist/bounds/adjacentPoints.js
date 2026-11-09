"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const getPointsForLines_1 = __importDefault(require("../line/getPointsForLines"));
const point_1 = __importDefault(require("../point/point"));
const nextCell_1 = __importDefault(require("../point/nextCell"));
const checkValidPoint_1 = __importDefault(require("./checkValidPoint"));
/**
 * Return all valid points surrounding a provided point
 * @param pnt - The point we want to find adjacent points for.
 * @param matrix - The matrix having the point.
 */
const adjacentPoints = (pnt, matrix) => (0, getPointsForLines_1.default)([[(0, point_1.default)(-1, -1, -1), (0, point_1.default)(-1, 1, -1)], [(0, point_1.default)(0, -1, -1), (0, point_1.default)(0, 1, -1)], [(0, point_1.default)(1, -1, -1), (0, point_1.default)(1, 1, -1)], [(0, point_1.default)(-1, -1, 0), (0, point_1.default)(-1, 1, 0)], [(0, point_1.default)(1, -1, 0), (0, point_1.default)(1, 1, 0)], [(0, point_1.default)(-1, -1, 1), (0, point_1.default)(-1, 1, 1)], [(0, point_1.default)(0, -1, 1), (0, point_1.default)(0, 1, 1)], [(0, point_1.default)(1, -1, 1), (0, point_1.default)(1, 1, 1)]]).concat([(0, point_1.default)(0, -1, 0), (0, point_1.default)(0, 1, 0)]).map(p => (0, nextCell_1.default)(pnt, p)).filter(p => (0, checkValidPoint_1.default)(p, matrix));
exports.default = adjacentPoints;