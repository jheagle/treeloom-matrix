'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _adjacentEdgePoints = _interopRequireDefault(require('./functions/adjacentEdgePoints.js'))
const _adjacentPoints = _interopRequireDefault(require('./functions/adjacentPoints.js'))
const _alterCoordinates = _interopRequireDefault(require('./functions/alterCoordinates.js'))
const _areEqualPoints = _interopRequireDefault(require('./functions/areEqualPoints.js'))
const _buildMatrix = _interopRequireDefault(require('./functions/buildMatrix.js'))
const _checkInBetween = _interopRequireDefault(require('./functions/checkInBetween.js'))
const _checkValidPoint = _interopRequireDefault(require('./functions/checkValidPoint.js'))
const _getAbsolutePoint = _interopRequireDefault(require('./functions/getAbsolutePoint.js'))
const _getAllPoints = _interopRequireDefault(require('./functions/getAllPoints.js'))
const _getAvailableRanges = _interopRequireDefault(require('./functions/getAvailableRanges.js'))
const _getAxisLengths = _interopRequireDefault(require('./functions/getAxisLengths.js'))
const _getCoordinateRanges = _interopRequireDefault(require('./functions/getCoordinateRanges.js'))
const _getDomItemFromElement = _interopRequireDefault(require('./functions/getDomItemFromElement.js'))
const _getDomItemFromPoint = _interopRequireDefault(require('./functions/getDomItemFromPoint.js'))
const _getFirstAxisOfCoordinate = _interopRequireDefault(require('./functions/getFirstAxisOfCoordinate.js'))
const _getHighestAbsoluteCoordinate = _interopRequireDefault(require('./functions/getHighestAbsoluteCoordinate.js'))
const _getLineIntersectPoints = _interopRequireDefault(require('./functions/getLineIntersectPoints.js'))
const _getLinePoints = _interopRequireDefault(require('./functions/getLinePoints.js'))
const _getLineRelativePoints = _interopRequireDefault(require('./functions/getLineRelativePoints.js'))
const _getLineTransitionPoints = _interopRequireDefault(require('./functions/getLineTransitionPoints.js'))
const _getMatrixRange = _interopRequireDefault(require('./functions/getMatrixRange.js'))
const _getPointFromDomItem = _interopRequireDefault(require('./functions/getPointFromDomItem.js'))
const _getPointFromElement = _interopRequireDefault(require('./functions/getPointFromElement.js'))
const _getPointsForLines = _interopRequireDefault(require('./functions/getPointsForLines.js'))
const _lineEndPoint = _interopRequireDefault(require('./functions/lineEndPoint.js'))
const _nextCell = _interopRequireDefault(require('./functions/nextCell.js'))
const _pointDifference = _interopRequireDefault(require('./functions/pointDifference.js'))
const _pointsToStep = _interopRequireDefault(require('./functions/pointsToStep.js'))
const _prevCell = _interopRequireDefault(require('./functions/prevCell.js'))
const _randDirection = _interopRequireDefault(require('./functions/randDirection.js'))
const _randDirectionWithInterval = _interopRequireDefault(require('./functions/randDirectionWithInterval.js'))
const _randomPoint = _interopRequireDefault(require('./functions/randomPoint.js'))
const _randomStart = _interopRequireDefault(require('./functions/randomStart.js'))
const _sortAxisCoordinates = _interopRequireDefault(require('./functions/sortAxisCoordinates.js'))
const _testIntervalFits = _interopRequireDefault(require('./functions/testIntervalFits.js'))
const _testPointsBetween = _interopRequireDefault(require('./functions/testPointsBetween.js'))
const _updateMatrixPoints = _interopRequireDefault(require('./functions/updateMatrixPoints.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * @file All of the siFunciona matrix functions for working with a grid of points.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module matrixFunctions
 */
const _default = exports.default = {
  adjacentEdgePoints: _adjacentEdgePoints.default,
  adjacentPoints: _adjacentPoints.default,
  alterCoordinates: _alterCoordinates.default,
  areEqualPoints: _areEqualPoints.default,
  buildMatrix: _buildMatrix.default,
  checkInBetween: _checkInBetween.default,
  checkValidPoint: _checkValidPoint.default,
  getAbsolutePoint: _getAbsolutePoint.default,
  getAllPoints: _getAllPoints.default,
  getAvailableRanges: _getAvailableRanges.default,
  getAxisLengths: _getAxisLengths.default,
  getCoordinateRanges: _getCoordinateRanges.default,
  getDomItemFromElement: _getDomItemFromElement.default,
  getDomItemFromPoint: _getDomItemFromPoint.default,
  getFirstAxisOfCoordinate: _getFirstAxisOfCoordinate.default,
  getHighestAbsoluteCoordinate: _getHighestAbsoluteCoordinate.default,
  getLineIntersectPoints: _getLineIntersectPoints.default,
  getLinePoints: _getLinePoints.default,
  getLineRelativePoints: _getLineRelativePoints.default,
  getLineTransitionPoints: _getLineTransitionPoints.default,
  getMatrixRange: _getMatrixRange.default,
  getPointFromDomItem: _getPointFromDomItem.default,
  getPointFromElement: _getPointFromElement.default,
  getPointsForLines: _getPointsForLines.default,
  lineEndPoint: _lineEndPoint.default,
  nextCell: _nextCell.default,
  pointDifference: _pointDifference.default,
  pointsToStep: _pointsToStep.default,
  prevCell: _prevCell.default,
  randDirection: _randDirection.default,
  randDirectionWithInterval: _randDirectionWithInterval.default,
  randomPoint: _randomPoint.default,
  randomStart: _randomStart.default,
  sortAxisCoordinates: _sortAxisCoordinates.default,
  testIntervalFits: _testIntervalFits.default,
  testPointsBetween: _testPointsBetween.default,
  updateMatrixPoints: _updateMatrixPoints.default
}
