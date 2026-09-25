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
const point_1 = __importDefault(require('./point'))
/**
 * Based on provided point and point direction generate previous point.
 * @function
 * @param pnt - Provide the current / initial point
 * @param dir - Provide the direction to be applied to find the previous point
 */
const prevCell = (pnt, dir) => (0, point_1.default)(pnt.x - dir.x, pnt.y - dir.y, pnt.z - dir.z)
exports.default = prevCell
