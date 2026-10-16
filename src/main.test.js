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

  test('the package exports the flat matrixDom object directly, not wrapped under a default key', () => {
    // A regression test for a real bug: `export default` here compiled to `exports.default = ...`, which
    // browserify's standalone option (used for the plain <script> tag / global consumption case) then exposed
    // as `window.matrixDom = { default: {...} }` instead of the real object - every destructured function
    // (square, matrix, point, ...) silently became undefined. `export =` avoids this, matching json-dom's own
    // main.ts. Uses require() directly (not the top-level `import` above) so TypeScript/babel's esModuleInterop
    // doesn't smooth over the exact shape a plain CommonJS consumer actually gets.
    const requiredMatrixDom = require('./main')
    expect(requiredMatrixDom.default).toBeUndefined()
    expect(typeof requiredMatrixDom.square).toBe('function')
    expect(typeof requiredMatrixDom.matrix).toBe('function')
    expect(typeof requiredMatrixDom.point).toBe('function')
  })
})
