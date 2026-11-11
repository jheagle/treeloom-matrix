/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getDomItemFromPoint from './getDomItemFromPoint'
import getPointFromElement from './getPointFromElement'
import { Matrix, MatrixColumn } from '../grid/types'

/**
 * Retrieve the DomItem associated with the provided element in the matrix
 * @param elem - Provide an element having an associated DomItem.
 * @param matrix - The matrix potentially containing the DomItem with Point.
 * @returns The DomItem (a column), or false when the element is not in the matrix
 */
const getDomItemFromElement = (elem: Node, matrix: Matrix): MatrixColumn | false => getDomItemFromPoint(
  getPointFromElement(elem),
  matrix
)

export default getDomItemFromElement
