'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
/**
 * Given two points, compare the x, y, and z of each to see if they are the same
 * @param p1 - The first point to compare
 * @param p2 - The other point to be compared
 */
const areEqualPoints = (p1, p2) => p1.x === p2.x && p1.y === p2.y && p1.z === p2.z
exports.default = areEqualPoints
