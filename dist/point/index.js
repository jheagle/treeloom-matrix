'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _alterCoordinates = _interopRequireDefault(require('./alterCoordinates.js'))
const _areEqualPoints = _interopRequireDefault(require('./areEqualPoints.js'))
const _direction = _interopRequireDefault(require('./direction.js'))
const _getAbsolutePoint = _interopRequireDefault(require('./getAbsolutePoint.js'))
const _getFirstAxisOfCoordinate = _interopRequireDefault(require('./getFirstAxisOfCoordinate.js'))
const _getHighestAbsoluteCoordinate = _interopRequireDefault(require('./getHighestAbsoluteCoordinate.js'))
const _nextCell = _interopRequireDefault(require('./nextCell.js'))
const _point = _interopRequireDefault(require('./point.js'))
const _pointDifference = _interopRequireDefault(require('./pointDifference.js'))
const _prevCell = _interopRequireDefault(require('./prevCell.js'))
const _sortAxisCoordinates = _interopRequireDefault(require('./sortAxisCoordinates.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
const _default = exports.default = {
  alterCoordinates: _alterCoordinates.default,
  areEqualPoints: _areEqualPoints.default,
  direction: _direction.default,
  getAbsolutePoint: _getAbsolutePoint.default,
  getFirstAxisOfCoordinate: _getFirstAxisOfCoordinate.default,
  getHighestAbsoluteCoordinate: _getHighestAbsoluteCoordinate.default,
  nextCell: _nextCell.default,
  point: _point.default,
  pointDifference: _pointDifference.default,
  prevCell: _prevCell.default,
  sortAxisCoordinates: _sortAxisCoordinates.default
}
