/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import checkValidPoint from '../bounds/checkValidPoint'
import { Point } from '../point/types'
import { Matrix, MatrixColumn } from '../grid/types'

/**
 * Retrieve the DomItem associated with the provided point
 * @param pnt - A point corresponding to a DomItem.
 * @param matrix - The matrix containing the point.
 * @returns The DomItem (a column), or false when the point is not in the matrix
 */
const getDomItemFromPoint = (pnt: Point, matrix: Matrix): MatrixColumn | false => checkValidPoint(pnt, matrix)
  ? matrix.children[pnt.z].children[pnt.y].children[pnt.x]
  : false

export default getDomItemFromPoint
