'use strict'

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
const testPointsBetween_1 = __importDefault(require('./testPointsBetween'))
/**
 * Given two points, check the cells between using specified function.
 * When inclusive is set to true the provided start and end points will also be tested
 * @param start - The beginning point to check.
 * @param end - The terminating point to check between.
 * @param matrix - The grid of points all the points can exist on.
 * @param func - The test function which will return true or false.
 * @param inclusive - Choose whether to include or exclude the start and end points in the results.
 * @returns Whether at least one of the points passed the test
 */
const checkInBetween = (start, end, matrix, func, inclusive = true) => !!(0, testPointsBetween_1.default)(start, end, matrix, func, inclusive).true.length
exports.default = checkInBetween
