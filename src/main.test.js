/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import treeloomMatrix from './main'

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
  'navigableGrid',
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

describe('treeloomMatrix public API', () => {
  test('has exactly the functions and objects it had before the folders were regrouped', () => {
    expect(Object.keys(treeloomMatrix).sort()).toEqual(publicApi)
  })

  test('the package exports the flat treeloomMatrix object directly, not wrapped under a default key', () => {
    // A regression test for a real bug: `export default` here compiled to `exports.default = ...`, which
    // browserify's standalone option (used for the plain <script> tag / global consumption case) then exposed
    // as `window.treeloomMatrix = { default: {...} }` instead of the real object - every destructured function
    // (square, matrix, point, ...) silently became undefined. `export =` avoids this, matching treeloom's own
    // main.ts. Uses require() directly (not the top-level `import` above) so TypeScript/babel's esModuleInterop
    // doesn't smooth over the exact shape a plain CommonJS consumer actually gets.
    const requiredTreeloomMatrix = require('./main')
    expect(requiredTreeloomMatrix.default).toBeUndefined()
    expect(typeof requiredTreeloomMatrix.square).toBe('function')
    expect(typeof requiredTreeloomMatrix.matrix).toBe('function')
    expect(typeof requiredTreeloomMatrix.point).toBe('function')
  })
})
