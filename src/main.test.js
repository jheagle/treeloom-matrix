/**
 * @jest-environment jsdom
 */
import matrixDom from './main'

// The names other projects (battleship, ...) call. Moving a function between folders must never change these.
const publicApi = [
  'adjacentEdgePoints',
  'adjacentPoints',
  'alterCoordinates',
  'areEqualPoints',
  'buildMatrix',
  'checkInBetween',
  'checkValidPoint',
  'cube',
  'direction',
  'getAbsolutePoint',
  'getAllPoints',
  'getAvailableRanges',
  'getAxisLengths',
  'getCoordinateRanges',
  'getDomItemFromElement',
  'getDomItemFromPoint',
  'getFirstAxisOfCoordinate',
  'getHighestAbsoluteCoordinate',
  'getLayerPoints',
  'getLineIntersectPoints',
  'getLinePoints',
  'getLineRelativePoints',
  'getLineTransitionPoints',
  'getLinesOfLength',
  'getMatrixRange',
  'getPointFromDomItem',
  'getPointFromElement',
  'getPointsForLines',
  'lineEndPoint',
  'matrix',
  'nextCell',
  'point',
  'pointDifference',
  'pointsToStep',
  'prevCell',
  'randDirection',
  'randDirectionWithInterval',
  'randomPoint',
  'randomStart',
  'sortAxisCoordinates',
  'square',
  'testIntervalFits',
  'testPointsBetween',
  'tile',
  'updateMatrixPoints'
]

describe('matrixDom public API', () => {
  test('has exactly the functions and objects it had before the folders were regrouped', () => {
    expect(Object.keys(matrixDom).sort()).toEqual(publicApi)
  })
})
