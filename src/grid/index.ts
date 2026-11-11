/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * The grid itself: a matrix of layers, rows and columns (json-dom items with the matrix.* traits), where each
 * column holds a tile with its point.
 */
import buildMatrix from './buildMatrix'
import cube from './cube'
import matrix from './matrix'
import navigableGrid from './navigableGrid'
import square from './square'
import tile from './tile'
import updateMatrixPoints from './updateMatrixPoints'

export default {
  buildMatrix,
  cube,
  matrix,
  navigableGrid,
  square,
  tile,
  updateMatrixPoints
}
