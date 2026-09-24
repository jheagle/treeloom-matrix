'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _getDomItemFromElement = _interopRequireDefault(require('./getDomItemFromElement.js'))
const _getDomItemFromPoint = _interopRequireDefault(require('./getDomItemFromPoint.js'))
const _getPointFromDomItem = _interopRequireDefault(require('./getPointFromDomItem.js'))
const _getPointFromElement = _interopRequireDefault(require('./getPointFromElement.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
const _default = exports.default = {
  getDomItemFromElement: _getDomItemFromElement.default,
  getDomItemFromPoint: _getDomItemFromPoint.default,
  getPointFromDomItem: _getPointFromDomItem.default,
  getPointFromElement: _getPointFromElement.default
}
