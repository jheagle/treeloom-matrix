'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.filter.js')
require('core-js/stable')
/**
 * Having provided a coordinate number, find all corresponding axis, return the first match.
 * @function
 * @param {module:matrixObjects~Point} pnt - The Point containing a matching coordinate.
 * @param {module:matrixObjects~coordinate} coordinate - The coordinate to search for.
 * @returns {false|module:matrixObjects~axis}
 */
const getFirstAxisOfCoordinate = (pnt, coordinate) => Object.keys(pnt).filter(key => pnt[key] === coordinate)[0] || false
const _default = exports.default = getFirstAxisOfCoordinate
