'use strict'

require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.filter.js')
const __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule
    ? mod
    : {
        default: mod
      }
}
Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
const point_1 = __importDefault(require('../point/point'))
const nextCell_1 = __importDefault(require('../point/nextCell'))
const checkValidPoint_1 = __importDefault(require('./checkValidPoint'))
/**
 * Return all points which touch on edges (not diagonal)
 * @function
 * @param pnt - The point we want to find adjacent points for.
 * @param matrix - The matrix having the point.
 */
const adjacentEdgePoints = (pnt, matrix) => [(0, point_1.default)(-1, 0, 0), (0, point_1.default)(1, 0, 0), (0, point_1.default)(0, -1, 0), (0, point_1.default)(0, 1, 0), (0, point_1.default)(0, 0, -1), (0, point_1.default)(0, 0, 1)].map(p => (0, nextCell_1.default)(pnt, p)).filter(p => (0, checkValidPoint_1.default)(p, matrix))
exports.default = adjacentEdgePoints
