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
const si_funciona_1 = __importDefault(require('si-funciona'))
/**
 * Return the first coordinate number with the highest absolute value.
 * @param pnt - A Point to be assessed.
 */
const getHighestAbsoluteCoordinate = pnt => si_funciona_1.default.reduceObject(pnt, si_funciona_1.default.absoluteMax, 0)
exports.default = getHighestAbsoluteCoordinate
