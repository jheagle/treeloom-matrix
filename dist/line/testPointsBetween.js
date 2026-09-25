'use strict'

require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.filter.js')
require('core-js/modules/esnext.iterator.reduce.js')
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
const getLinePoints_1 = __importDefault(require('./getLinePoints'))
/**
 * Given a start and end point, test the points between with the provided function. Return the points as part of true
 * and / or false properties based on the test.
 * @function
 * @param start - The beginning point to check.
 * @param end - The terminating point to check between.
 * @param matrix - The grid of points all the points can exist on.
 * @param func - The test function which will return true or false.
 * @param inclusive - Choose whether to include or exclude the start and end points in the results.
 */
const testPointsBetween = (start, end, matrix, func, inclusive = true) => (0, getLinePoints_1.default)(start, end).filter((_prop, i, line) => i !== 0 && i !== line.length - 1 || inclusive).reduce((newPoints, next) => {
  newPoints[func(next, matrix) ? 'true' : 'false'].push(next)
  return newPoints
}, {
  true: [],
  false: []
})
exports.default = testPointsBetween
