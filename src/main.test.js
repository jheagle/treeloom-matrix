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
  'getLineIntersectPoints',
  'getLinePoints',
  'getLineRelativePoints',
  'getLineTransitionPoints',
  'getMatrixRange',
  'getPointFromDomItem',
  'getPointFromElement',
  'getPointsForLines',
  'lineEndPoint',
  'matrix',
  'nextCell',
  'noConflict',
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

  test('noConflict gives back the previous matrixDom and leaves jsonDom alone', () => {
    const previous = { name: 'previous' }
    jest.isolateModules(() => {
      window.matrixDom = previous
      const fresh = require('./main').default
      const jsonDom = window.jsonDom
      expect(window.matrixDom).toBe(fresh)
      expect(fresh.noConflict()).toBe(fresh)
      expect(window.matrixDom).toBe(previous)
      expect(window.jsonDom === jsonDom).toBe(true)
    })
  })
})
