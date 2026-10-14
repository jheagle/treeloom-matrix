/**
 * Measure a matrix and check points against it: axis lengths, ranges, valid points and the points around a point.
 */
import 'core-js/stable'
import adjacentEdgePoints from './adjacentEdgePoints'
import adjacentPoints from './adjacentPoints'
import checkValidPoint from './checkValidPoint'
import getAllPoints from './getAllPoints'
import getAvailableRanges from './getAvailableRanges'
import getAxisLengths from './getAxisLengths'
import getCoordinateRanges from './getCoordinateRanges'
import getLayerPoints from './getLayerPoints'
import getMatrixRange from './getMatrixRange'

export default {
  adjacentEdgePoints,
  adjacentPoints,
  checkValidPoint,
  getAllPoints,
  getAvailableRanges,
  getAxisLengths,
  getCoordinateRanges,
  getLayerPoints,
  getMatrixRange
}
