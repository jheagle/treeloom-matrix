/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import matrix from './matrix'
import updateMatrixPoints from './updateMatrixPoints'
import jsonDom from 'json-dom'
import siFunciona from 'si-funciona'
import { Matrix, MatrixProps } from './types'
import { Point } from '../point/types'

/**
 * Create the matrix and assign the correct points to each tile.
 * @param dimensions - The dimensions of the matrix to be created (x is the width, y the height, z the depth)
 * @param props - Additional properties to be added to each level of the matrix
 */
const buildMatrix = (
  dimensions: Point = { x: 0, y: 0, z: 1 },
  props: MatrixProps = { x: {}, y: {}, z: {}, matrix: {} }
): Matrix => siFunciona.pipe(
  jsonDom.setParentItemReferences,
  updateMatrixPoints
)(matrix(dimensions, props))

export default buildMatrix
