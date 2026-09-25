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
const getDomItemFromElement_1 = __importDefault(require('./getDomItemFromElement'))
const getDomItemFromPoint_1 = __importDefault(require('./getDomItemFromPoint'))
const getPointFromDomItem_1 = __importDefault(require('./getPointFromDomItem'))
const getPointFromElement_1 = __importDefault(require('./getPointFromElement'))
exports.default = {
  getDomItemFromElement: getDomItemFromElement_1.default,
  getDomItemFromPoint: getDomItemFromPoint_1.default,
  getPointFromDomItem: getPointFromDomItem_1.default,
  getPointFromElement: getPointFromElement_1.default
}
