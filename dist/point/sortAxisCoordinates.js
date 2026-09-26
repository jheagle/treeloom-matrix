'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
/**
 * Take a point and sort the coordinates, return an array of them sorted.
 * @param pnt - the Point to be sorted
 * @param direction - 'asc'|'desc'
 */
const sortAxisCoordinates = (pnt, direction = 'desc') => {
  const sortFn = direction === 'desc' ? (a, b) => b.coordinate - a.coordinate : (a, b) => a.coordinate - b.coordinate
  const axisCoordinatePairs = [{
    axis: 'x',
    coordinate: pnt.x
  }, {
    axis: 'y',
    coordinate: pnt.y
  }, {
    axis: 'z',
    coordinate: pnt.z
  }]
  return axisCoordinatePairs.sort(sortFn)
}
exports.default = sortAxisCoordinates
