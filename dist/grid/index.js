'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _buildMatrix = _interopRequireDefault(require('./buildMatrix.js'))
const _cube = _interopRequireDefault(require('./cube.js'))
const _matrix = _interopRequireDefault(require('./matrix.js'))
const _square = _interopRequireDefault(require('./square.js'))
const _tile = _interopRequireDefault(require('./tile.js'))
const _updateMatrixPoints = _interopRequireDefault(require('./updateMatrixPoints.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
const _default = exports.default = {
  buildMatrix: _buildMatrix.default,
  cube: _cube.default,
  matrix: _matrix.default,
  square: _square.default,
  tile: _tile.default,
  updateMatrixPoints: _updateMatrixPoints.default
}
