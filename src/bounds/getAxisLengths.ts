/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import point from '../point/point'
import { Point } from '../point/types'
import { Matrix } from '../grid/types'

/**
 * Return point-like object with all of the axis lengths.
 * @param matrix - The matrix to get the dimensions of.
 */
const getAxisLengths = (matrix: Matrix): Point => point(
  matrix.children[0].children[0].children.length,
  matrix.children[0].children.length,
  matrix.children.length
)

export default getAxisLengths
